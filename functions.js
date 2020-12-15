"use strict";

/** Understanding Arror functions
 * 
 * There are only a few steps for converting the existing "normal" function into an arrow function.
 * - remove the function keyword
 * - remove the parentheses
 * - remove the opening and closing curly braces
 * - remove the return keyword
 * - add an arrow ( => ) between the parameter list and the function body
 * 
 * 
 * 
 * Regular functions can be either function declarations or function expressions, 
 * however ARROW FUNCTIONS ARE ALWAYS EXPRESSION. In fact, their full name is "arrow function expressions", 
 * so they can only be used where an expression is valid or can be used. This includes being:
 * 
 * stored in a variable,
 * passed as an argument to a function,
 * and stored in an object's property.
 * 
 * 
 * There are definitely times when you might not want to use an arrow function. But for for the three situations above, you can use them!
 * The way arrow functions handles 'this' keyword is different. This is why you should be careful when using arrow functions
 */

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
});

//To convert the function above to arrow function in ES6 becomes
const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase() //remember arrow functions are alwyas expressions
);

//an arrow function is stored in a variable.
const greet = name => `Hello ${name}!`; //the parameter list appears before the arrow function's arrow (i.e. =>). here we have only one argument or parameter on the list so we dont need to have parenthesis() aroung the argument
console.log(greet('Asser')) // Returns: Hello Asser!

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();  //Prints: Hello Udacity Student!

//Alternatively, some developers choose to use an underscore as their single parameter. 
//The underscore never gets used, so it's undefined inside the function, but it's a common technique.
setTimeout( _ => {
    console.log('starting the test');
    sayHi()
}, 2000);  // we will wait for 2 seconds the run the function

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');  //Prints: Here's your chocolate ice cream in a waffle cone.

//There are two types of arrow function
/*Block body syntax: has curly braces surrounding the function and must return a value(So the return value must be hardcoded). This is used hwne you need more than just a single line of code in your arrow function's body. Eg*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];

const crazyColors = colors.map( color => {
    const jumble = color.split('').reverse();
    return jumble.join('') + '!';  //Because the arrow function uses curly braces, there has to be a return in there somewhere for something to actually be returned.

});

/**Concise body syntax:  has no curly braces surrounding the function body and automatically returns the expression.*/
//This is the most common way you'll see arrow functions written—as one-liners that automatically return.
const crazyColors2 = colors.map( color => color.split('').reverse().join('') + '!' );

//crazyColors and crazyColors2 will return thesame output!



/** Understanding "this" and Arrow Functions  
 * 
 * 
 * With regular functions, the value of "this" is set based on how the function is called. 
 * With arrow functions, the value of "this" is based on the function's surrounding context (where the function is located in the code). In other words, the value of this inside an arrow function is the same as the value of this outside the function.
*/

// constructor
function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++; //scoops will be undefined by default, when new IceCream object is called
      console.log(`scoop added! ${this.scoops}`);
    }, 500);
  };
  
  const dessert = new IceCream();
  dessert.addScoop();  // scoop added! NaN
  console.log(dessert.scoops) // 0
  //So what actually happened above was that a new scoops variable was created (with a default value of undefined) and was then incremented (undefined + 1 results in NaN)
  //That means the value of this inside the function is the global object and NOT the dessert object.

//To work around this
function IceCreamWithCone() {
    this.scoops = 0;
}

IceCreamWithCone.prototype.addScoop = function() {
    const cone = this; // the value `this` globally outside of the function which is 0 is set to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log(`scoop added! ${cone.scoops}`);
    }, 0.5);
};

const dessert2 = new IceCreamWithCone();
dessert2.addScoop(); // scoop added! 1


//The idea of the work around above is how arrow functions handles `this` . So the value of this inside the function is based on the surrounding context
function IceCreamArrow() {
    this.scoops = 0;
}

IceCreamArrow.prototype.addScoop = function() { // addScoop is now an arrow function
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++; 
    console.log(`scoop added! ${this.scoops}`);
  }, 0.5);
};


const dessert3 = new IceCreamArrow();
dessert3.addScoop(); // scoop added! 1


/**End Understanding "this" and Arrow functions */


/** Understanding default function paramter 
 * 
 * using default function paramters is good because we dont have to check for a parameter whether it is passed or not(undefined).
 * The default value assigned to the argument will be used when an argument is not defined. This applies to object, array, or a normal varible
 * Another programming language that does this is PHP
 * 
 * NOTE: you are advised to use object default over array default due to the way destrunction works in this two cases
 */

const buildHouse = ({floors = 1,  color = 'red', walls = 'brick'} = {}) => `Your house has ${floors} floor(s) with ${color} ${walls} walls.`

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.  //we passed this because '= {}' at the end of the destruncted object, the method use this default empty array when no no object is passed.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls. //destructed properly
console.log(buildHouse({floors: 3, color: 2}));  // Your house has 3 floor(s) with 2 brick walls.


/**Since arrays are positionally based, we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

Unless you've got a strong reason to use array defaults with array destructuring, we recommend going with object defaults with object destructuring! Look at the example below */

//for object defaults
/*function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) { … }
createSundae({toppings: ['Hot Fudge', 'Sprinkles', 'Caramel']});  // if you want to use the default value for scoops but change the toppings, then all you need to do is pass in an object with toppings
*/

//for Array defaults
/** function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }
createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]); //// if you want to use the default value for scoops but change the toppings, then you need to add undefined for scoops and the value for the second argument
 * 
 */


 /**Working with JavaScript Classes

- class is not magic. The class keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.
- class is a mirage over prototypal inheritance. We've said this many times before, but under the hood, a JavaScript class just uses prototypal inheritance.
- Using classes requires the use of new. When creating a new instance of a JavaScript class, the new keyword must be used
 */

/*
function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}
  
// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};*/

//the function code above is thesame as the class code below. Just that in ES5 you have had to write the code above to create 'class'
class Plane {
    constructor(numEngines) {
      this.numEngines = numEngines;
      this.enginesActive = false;
    }
  
    startEngines() {
      console.log('starting engines…');
      this.enginesActive = true;
    }
}

console.log(typeof Plane) // function


//FYI: Javascript is not a class baded language. It uses functions to create objects and links objects together throgh prototypal inheriance
//Just because ES6 provides us with new keyworkds like class, constructor, super, static, and extends does not mean the way the language entirely works has changed.
//We just have have a new cleaner way to write functionality using the new keywords


/**
 * Create a Bicycle subclass that extends the Vehicle class. 
 * The Bicycle subclass should override Vehicle's constructor function by 
 * changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle {
    constructor(color, wheels = 2, horn = 'honk honk'){
        super(color, wheels, horn); //super must be called before this
        //i can add new data for this Bicyle class eg this.brand then add a new paramter to initilize this data from the constructor or have a default value
    }
}

// tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

/**
 * NOTES:
 * 
 * Like most of the new additions in ES6, there's a lot less setup code and it's a lot cleaner syntax to create a subclass using class, super, and extends.
 */

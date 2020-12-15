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

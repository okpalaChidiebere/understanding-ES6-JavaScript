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

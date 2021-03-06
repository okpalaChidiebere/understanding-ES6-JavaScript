"use strict";

/*** Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
 * 
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

Since const is the strictest way to declare a variable, we suggest that you always declare variables with const because it'll make your code easier to reason about since you know the identifiers won't change throughout the lifetime of your program.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const.
**/

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();
/**End understanding let */


/**Understanding Template Literals */

const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
}
  
const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
}

//Prior to ES6, the old way to concatenate strings together was by using the string concatenation operator ( + ) or concat() eg 
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian

//Template literals are essentially string literals that include embedded expressions.
let noteES6 = `${teacher.name}
Please excuse ${student.name}
He is recovering from the flu.
Thank you,
${student.guardian}`
console.log(noteES6)  //noteES6 will have thesame output as note

/**End understanding Template literals */


/**Understanding Destructuring
 * 
 * Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. 
 * It sounds a little weird, but you can actually achieve the same result as before, but with much less code; 
 */
const point = [10, 25, -34];
const [xDes, yDes, zDes] = point;  //using Destructing, you write less code
console.log(xDes, yDes, zDes); //10 25 -34
const [yDes2, zDes2] = point;
console.log(yDes2, zDes2); //10 25
//You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.

const x = point[0]; //without Destructiing you write more lines of code
const y = point[1];//without Destructiing you write more lines of code
const z = point[2];//without Destructiing you write more lines of code
console.log(x, y, z);  //10 25 -34

//Destructing For objects
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};
const {type, color, carat} = gemstone;  //thesame thing with array, but this time you use {} instead of []
console.log(type, color, carat);  //quartz rose 21.29
console.log(type, carat); //quartz 21.29

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
const [one, , ,two, , , ,three] = things
console.log(one, two, three) //red green blue

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * 10 * 10;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius
    }
  };
  
  let {radius, getArea, getCircumference} = circle
  console.log(radius, getArea, getCircumference) //10 NaN NaN
  //Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.

  //End Destructuring


/**Object Literal Shorthand */
//You already know this
let firstNname = 'chidi';
let lastName = 'okpala';
let favNum = 2;

const person = {
    firstNname: firstNname,
    lastName: lastName,
    favNum: favNum
}; //type: type, color: color, and carat:carat seem redundant

//new way in ES6 to avoid redundant
const person2 = {firstNname,lastName,favNum};
console.log(person2); //{firstNname: "chidi", lastName: "okpala", favNum: 2}

const richPerson = {
    firstNname: firstNname,
    calculateWorth: function() {
        // will calculate worth of gemstone based on type, color, and carat
    }
}
const richPerson2 = {
    firstNname,
    calculateWorth(){ //Shorthand method names in ES6 instead of having the function keyword redundant

    }
};
/**End Object Literal Shorthand */

/**Understanding Iteration */
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Really the biggest downside of a for loop is having to keep track of the counter and exit condition.
for (let i = 0; i < digits.length; i++) { //you already know the regular for loop
   // console.log(digits[i]);
}

//in ES6, the for...in loop improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.
//While for loops certainly have an advantage when looping through arrays, some data is not structured like an array, so a for loop isn’t always an option.
for (const index in digits) {
  console.log(digits[index]);
}

//You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.
for (const digit of digits) {
    console.log(digit); //we dont worry about the index
}
// TIP: It’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name
//Always use for...of because it stands out as our best option for looping!

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for(let day of days){
    console.log(day.charAt(0).toUpperCase() + day.slice(1)) //capitalizes the first letter of the day
}



/**Understanding Spread... Operator
 * 
 * gives you the ability to expand, or spread, iterable objects into multiple elements.
 */


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(...primes); // 2 3 5 7 11 13 17 19 23 29

//One example of when the spread operator can be useful is when combining arrays or objects.
const fruits = ["apples", "bananas", "pears"]
const vegetables = ["corn", "potatoes", "carrots"]
console.log(fruits.concat(vegetables)) //["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

//using spread operator
console.log([...fruits, ...vegetables]) //["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
console.log([fruits, ...vegetables]) //[ [ 'apples', 'bananas', 'pears' ], 'corn', 'potatoes', 'carrots' ]

const market = [...fruits, ...vegetables]; //  here we use spread... to get ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
const [marketApple, marketBanana, marketPears, ...margetVegertables ] = market; //here we use ...rest to bundle multiple elements back to an array using the destruction syntax in ES6
console.log(marketApple, marketBanana, marketPears, margetVegertables)  // 'apples' 'bananas' 'pears' ['corn', 'potatoes', 'carrots' ]
/**End Understanding spread Operator */



/** Understanding Rest Parameter
 * 
 * 
 */

//One situation to usre rest parameter is when assigning the values of an array to variables. For example, after you use spread operator to spread an array into multiple elements, you use resy to bundle multiple elements back into an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread", 2];
const [total, subtotal, tax, ...items] = order; //using the distruction in ES6 we learned earlier
console.log(total, subtotal, tax, items); // 198 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread", 2] so we bundled the rest of the items after 1.50 back into an array

//another situation to use rest parameter is when you’re working with variadic functions. Variadic functions are functions that take an indefinite number of arguments.
function average(...nums) { //we can have one parameter or 1000
    let total = 0;  

    if(nums.length === 0)
        return total

    for(const num of nums) { //Remember, we use the for...of loop to loop over any type of data that is iterable. So we'll use for...of here rather than for...in.
      total += num;
    }
    return total/nums.length;
}
console.log(average(2, 6)) // 4
console.log(average(2, 3, 3, 5, 7, 10)) // 5
console.log(average()); //0  if i did not add that if statement to check, i will get an error NaN

/**End Understanding ...Rest */

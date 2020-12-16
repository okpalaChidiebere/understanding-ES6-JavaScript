"use strict";

/**
 * Understanding Symbols
 * 
 */
//lets say you have a bowl with three fruits, and you add an extra banana. 
const bowl1 = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.15 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 } //extra banana added. The new banana will override the olde banana
};
console.log(bowl1) // Object {apple: Object, banana: Object, orange: Object}  //you run into problem when you want to extract a banana out of the bowl. The system dont know which banana to choose
//The code above don't work because to keep the two banana separate, you will now have to name then differently like banana1, banana2. This gets redundant when you have like 10 bananas

// The code below we now use symbol to solve the problem
const bowl2 = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl2); //Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
//each property is a unique Symbol and the first banana doesn’t get overwritten by the second banana.

/** ENd Understanding Symbols */


/**Understanding sets
 * 
 * A Set is an object that lets you store unique items
 * You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.


 * 
 * The biggest differences between a set and an array are:

- Sets are not indexed-based - you do not refer to items in a set based on their position in the set
- items in a Set can’t be accessed individually

 */


const myFavoriteFlavors = new Set()
myFavoriteFlavors.add('chocolate chip')
myFavoriteFlavors.add('cookies and cream')
myFavoriteFlavors.add('strawberry')
myFavoriteFlavors.add('vanilla')
console.log(myFavoriteFlavors) // {"chocolate chip", "cookies and cream", "strawberry", "vanilla"}

myFavoriteFlavors.delete('strawberry')
console.log(myFavoriteFlavors) // {"chocolate chip", "cookies and cream", "vanilla"} 


myFavoriteFlavors.add('chocolate chip') //it will not throw any error, but it will not be adde, bcause the values of in set but be unique
myFavoriteFlavors.delete('strawberry') //strawberry was already removed. So nothing will work. Howvever, no error will be thrown

//myFavoriteFlavors.clear()  this will empty the set {}

myFavoriteFlavors.size   //will check for the length of the set

myFavoriteFlavors.has('cookies and cream')  //true

for (const flavor of myFavoriteFlavors) {  //prints all the set
    console.log(flavor);
  }



/**Understanding weak sets */

let flavor1 = {flavor: 'chocolate'}
let flavor2 = {flavor: 'ogbono'}

const uniqueFlavors = new WeakSet()
uniqueFlavors.add(flavor1)
uniqueFlavors.add(flavor2)
console.log(uniqueFlavors)

uniqueFlavors.add(flavor1)
console.log(uniqueFlavors)


//WeakSets take advantage of this by exclusively working with objects. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.
flavor2 = null;
console.log(uniqueFlavors);  //WeakSet {Object {flavor: 'ogbono'}}

/**End Understanding weak sets */


/** Understand Maps and WeakMaps
 * 
 * Maps and WaekMaps share a lot of thing in comon with Sets and Weak Sets.
 * They both have similar properties and methods
 * WeakSets and WeakMaps dont prevent objects from being garbage collected
 * Maps are collection of key-value paris while Sets are collection of unique values
 * Maps are to objects as Sets are to arrays
 */


const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const [key, value] of members) { //with array destructuring, the key-value pair is split up into an array where the first element is the key and the second element is the value.
    console.log(key, value)  //Evelyn 75.68 \n Liam 20.16 \n Sophia 0 \n Marcus 10.25

}

for (const member of members) {  //when you use a for...of loop with a Map, you don’t exactly get back a key or a value
    console.log(member);  //['Evelyn', 75.68] ['Liam', 20.16] ['Sophia', 0] ['Marcus', 10.25]
}


//one things you notice, you dont have to call the map function that is built in to loop through Maps. You have to use foor...of loop, forEach...loop or iterator

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
console.log(library); //WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false}

library.set('The Grapes of Wrath', false); // you get an error because you try to add something other than an object as a key, you’ll get an error!


/**End Understanding Maps and WeakMaps */




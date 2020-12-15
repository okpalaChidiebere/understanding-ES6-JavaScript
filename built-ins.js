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

myFavoriteFlavors.size()   //will check for the length of the set

myFavoriteFlavors.has('cookies and cream')  //true

for (const flavor of myFavoriteFlavors) {  //prints all the set
    console.log(flavor);
  }



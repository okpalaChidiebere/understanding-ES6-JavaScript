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
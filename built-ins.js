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

//library.set('The Grapes of Wrath', false); // you get an error because you try to add something other than an object as a key, you’ll get an error!


/**End Understanding Maps and WeakMaps */


/** UnderStanding Proxy
 * 
 * Doing ES6 are JavaScript Proxies
 * 
 * A JavScript Proxy will let one object stand in for another object to handle all the interactions for that other object. The Proxy can handle data directly, 
 * pass data back and forth to the target object and a whole bunch of other things
 */

//A simple Proxy. It is simple because the handle (passed in the second parameter) is empty
//you simple has to use the proxy constructor new Proxy(). It takes in two parameters
// - the object that it will be the proxy for
//- an object containing the list of methods it will handle for the proxied object.  If we want the proxy object to actually intercept the request, 
//that's what the handler object is for!
const richard = {status: 'looking for work'};
const agent = new Proxy(richard, {});
console.log(agent.status) //looking for work


/* */
const ben = {status: 'looking for work'};
const handler = {
    //this get method is called a 'trap' because it is used in a proxy. This method will intercept the call to ben 
    get(target, propName) {
        console.log(target); // this log the `ben` object, which is the main target in the call
        console.log(propName); // logs out the name of the property being requested `status`. The name of the property the proxy (`benAgent` in this case) is checking
    }
};
const benAgent = new Proxy(ben, handler);
console.log(benAgent.status); //`{status: "looking for work"}` `status` `undefined`
// the logs target and propName but finally logs benAgent.status as undefined because your trap function did not return anything. 
//Ideally you want to return a property value or a value place of the propery value
//take a look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
//or  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get


/**Having the proxy return info, directly*/
const chidi = {status: 'looking for work'};
const chidiHandler = {
    //we could use the proxy to provide direct feedback. Ideally the get trap should just return property or something. 
    //If we want to intercept calls to change properties, then the set trap needs to be used!
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    },
};
const chidiAgent = new Proxy(chidi, chidiHandler);
console.log(chidiAgent.status); // returns the text `He's following many leads, so you should offer a contract as soon as possible!`
const chidiSetPayHandler = {
    set(target, propName, value) {
      if (propName === 'payRate') { // if the pay is being set, take 15% as commission
          value = value * 0.85;
      }
      target[propName] = value;
      return true;
    }
};
const chidiSetPayAgent = new Proxy(chidi, chidiSetPayHandler);
chidiSetPayAgent.payRate = 1000; // set the actor's pay to $1,000
console.log(chidiSetPayAgent.payRate); // $850 the actor's actual pay

//For many more handlers, you can check out 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy

/** End Understanding Proxy */

/** Why you will want to use Proxies
 * 
 * Proxies vs. ES5 Getter/Setter
 */

 //You already know this
 var obj = {
  _age: 5,
  _height: 4,
  get age() {
      console.log(`getting the "age" property`);
      console.log(this._age);
  },
  get height() {
      console.log(`getting the "height" property`);
      console.log(this._height);
  }
};
//watch the log result closely
obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4
//But look what happens when we now add a new property to the object:
obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120
//Notice that a `getting the "weight" property` message wasn't displayed like the `age` and `height` properties produced.


//With ES6 Proxies, we do not need to know the properties beforehand:

const proxyObj = new Proxy({age: 5, height: 4}, {
  get(targetObj, property) {
      console.log(`getting the ${property} property`);
      console.log(targetObj[property]);
  }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
//All well and good, just like the ES5 code, but look what happens when we add a new property:
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
//A weight property was added to the proxy object, and when it was later retrieved, it displayed a log message!

//So some functionality of proxy objects may seem similar to existing ES5 getter/setter methods. 
//But with proxies, you do not need to initialize the object with getters/setters for each property when the object is initialized.




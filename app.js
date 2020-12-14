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




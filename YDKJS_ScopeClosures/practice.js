//Anonymous Versus Names

setTimeout (function(){
	console.log("I waited 1 second!");
}, 1000);

setTimeout(function timeoutHandler() { // <-- I have a name!
	console.log("I waited 1 second!");
}, 1000);


// Invoking Function Expressiosn Immediatley

var a = 2;

(function foo() {
	var a = 3;
	console.log(a); //3
})();

console.log(a); //2
 //The first enclosing () pair makes the function an
 //expression, and the second () executes the function.
 //The term for that: IIFE
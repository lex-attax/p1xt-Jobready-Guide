function baz() {
	//call-stack is:'baz'
	//so, our call-site is in the global scope
	console.log("baz");
	bar(); // <-- call-sit for 'bar'

}

function bar() {
	// call-stack is: 'baz' -> 'bar'
	//so, our call-site is in 'baz'
	
	console.log("bar");
	foo(); //<-- call-site for 'foo'
	
}

function foo() {
	// call-stack is: 'baz' ->'bar' ->'foo'
	//so, our call-site is in 'bar'
	
	console.log("foo");
	
}

baz(); //<-- call-sit for 'baz'

//Take care when analyzing code to find the actual call-site(form the call-stack),
// because it's the only thing that matters for 'this'-binding.
	
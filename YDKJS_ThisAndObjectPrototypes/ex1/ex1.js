function func() {
	var a = 1;
	console.log(this.a);
}

var obj = {
	a:2,
	func: func
};
var a=3;

obj.func(); //2
	
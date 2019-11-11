/*constructor function
 * the convention is to begin the blueprint with capital letter
 * */
function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function () {
		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

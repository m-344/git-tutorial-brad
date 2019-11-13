/*constructor function
 * the convention is to begin the blueprint with capital letter
 * */
class Person {
	constructor (fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	greet() {
		console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

/*we say to 'exports' literally be a Person constructer function
 * 'module' is parent of exports
 * */
 
/*NodeJS
 * module.exports = Person;*/
/* ECMAscript6:*/
export default Person;
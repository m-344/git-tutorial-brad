var $ = require('jquery');
var Person = require('./modules/Person');
/*when using a 'require-syntax' there is no need to add .js extension*/

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


var $ = require('jquery');
/*var Person = require('./modules/Person');*/
import Person from'./modules/Person';
/*when using a 'require-syntax' there is no need to add .js extension*/

class Adult extends Person{
	payTaxes(){
		console.log(this.name + " now owes $0.");
	}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();

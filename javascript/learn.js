//Output
document.getElementById("demo_06").innetHTML = "Hello World";
document.write("Hello World"); //Do not call after the document has finished loading, only use for testing.
window.alert("Hello World"); //Window is optional.
console.log("Hello World"); //For debugging.
window.print(); //Print current window.
      
//Declare variables
let a = "Deni"; //Can br reassign
const b = "Deni"; //Cannot be reassign
let c = a + " " + "Kusuma Wijaya";
//Variable var for JS 1995 - 2015
//Variable $ is legal, but it used for jQUery library
//Variable _ is legal, but it used for private variable

//Comments
//Single line comments
/*Multi line comments*/

//Operators
// ** Exponentiation as same as Math.pow(x,y)

//Comparison
// == Equal to
// === Equal value and equal type
// != Not equal
// ? Ternary operator

//Logical operators
// && || !

//Data types
let a = "Text"; //String
let b = 3; //Number
let c = true; //Boolean
let d = ["Saab", "Volvo", "BMW"]; //Arrays
let e = {firstName = "John", lastName = "Doe", age = 50}; //Object
//typeof variable_name to find the type of variables.

//Functions
funcion myFunction_03(p1, p2) {
  return p1 * p2;
}
let f = myFunction_03(2,3);

//Object
//object - property - method
const car = {type:"Fiat", model="500", color:"white"};
//Access
car.type;
car["model"];
  //Methods
  const person = {
    firstNmae : "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//On progress JS Events

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

//Events -> More HTML DOM
//onchange, An HTML element has been changed
//onclick, the user clicks an HTML element
//onmouseover, the user moves the mouse over an HTML element
//onmouseout, the user moves the mouse away from an HTML elemet
//onkeydown, the user pushes a keyboard key
//onload, the browser has finished the page

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<p id="demo"></p>

<button onclick="this.innerHTML=Date()">The time is?</button>
<button onclick="displayDate()">The time is?</button>

//Escape character
// \b -> Backspace
// \f -> From feed
// \n -> New line
// \r -> Carriage return
// \t -> Horizontal tabulator
// \v -> Vertical tabulator

//String Methods
let text = "Deni";
text.length; //Return length of a string, Output: 5

text = "Apple, Banana, Kiwi";
text.slice(7, 13); //Return extracted part in a new string, Output: Banana
text.slice(-12); //Output: Banana, Kiwi
text.slice(-12, 6); //Output: Banana
text.substring(7,13); //Output: Banana
text.substr(7,6); //Output: Banana
text.substr(7); //Output: Banana, Kiwi
text.substr(-4); //Output: Kiwi

text = "Please visit Micrososft!";
text.replace("Microsoft", "W3Schools"); //Replace only first match, case sensitive
text.replace(/MICROSOFT/i, "W3Schools"); //Incase sensitive, without quote
text.replace(/Microsoft/g, "W3Schools"); //Global match
text.replaceAll("Microsoft", "W3Schools");

text.toUpperCase(); //Output: PLEASE VISIT MICROSOFT!
text.toLowerCase(); //Oitput: please visit microsoft!
text3 = text1.concat(" ", text2); //Same as: text1 + " " + text2
text.trim(); //Before "   Test   " -> After "Test"
text.trimStart(); //Before "   Test   " -> After "Test   "
text.trimEnd(); //Before "   Test   " -> After "   Test"

text = "5";
text.padStart(4,"x"); //Output: xxx5, string method
text = 5;
text.toSting();
text.padStart(4, "0"); //Output: 0005
text.padEnd(4,xxx); //Output: 5xxx

text = "HELLO WORLD";
text.charAt(0); //Output: H
text.carCodeAt(0); //Output: 72, UTF-16 code
text[0];

text.split(","); //Converted to Array

//String Search
text = "Please locate where 'locate' occurs!";
text.indexOf("locate"); //Output: 7
text.lastIndexOf("locate"); //Output: 21
text.indexOf("Deni"); //Output: -1
text.indexOf("locate", 15); //Output: 21, start from 15
text.search(/locate/); //Output: 7, same as indexOf, but cannot teake a 2nd parameter
text.match();
text.matchAll();
text.includes("text", [optional]start_num); //Return true if text containing, otherwise return false
text.startsWith("text", [optional]start_num); //Return true if text containig, otherwise return false
text.endsWith("text", [optional]num_qty); //Return true if last of num_qty containing, otherwise return false

//Template literals
text = `<h2>Total price: ${(price * (1 + VAT)).toFixed(2)}</h2>`;

//Numbers
//How to know max and min integer
Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;

text.isInteger();
text.isSafeInteger();
text.toString(); //Returns a number as a string
text = 9.656;
text.toExponential(); //Returns a number written in exponential notation
text.toExponential(2); //Output: 9.66e+0
text.toFixed(); //Returns a number written with a number of decimals
text.toFixed(2); //Output: 9.66
text.toPrecision(); //Returns a number writen with a specified length
text.toPrecision(2); //Output: 9.7
text.valueOf(); //Return a number as a number
text.valueOf(123); //Output: 123

Number("10") //Convert to number
parseInt("10.33"); //Convert to integer
parseFloat("10.33"); //Convert to float

//Ongoing JavaScript Number Properties

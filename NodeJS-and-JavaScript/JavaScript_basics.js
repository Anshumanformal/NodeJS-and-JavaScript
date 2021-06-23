We can write to an html element using:
1. .innerHTML
2. document.write
3. window.alert
4. console.log


JavaScript Syntax defines two types of values:
1. Fixed values - also called literals
2. Variable values - also called variables

ES6 version of JavaScript(2015 version) introduced let and const to declare variables.
let - It is used to define variables with restricted scope.

const - It is used to define variable which can not be reassigned.

Number and String with addition operator:-

1. When numbers are written before string they are added(skip this step for single number) and
   concatenated with the string.

2. When the first operand is a string, then the consequent operands are also treated as strings.

We can empty any value, by setting the variable's value to undefined.

NULL:-

In JavaScript, null denotes something that doesn't exist.
typeof null - gives output as an object. It's possibly a bug in JavaScript.

Eg. var person = {firstname : "John", lastname : "Doe", age : 50, eyeColor : "blue"};
    person = null; // Now, the value is null, but type is still an object.


    Difference Between Undefined and Null
undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true


var person = {name:"John", age:50, city:"New York"};

//Conversion of JavaScript object into array using Object.values().

var myArray = Object.values(person);   //Object.values(<objectname>) converts object into array.
document.getElementById("demo").innerHTML = myArray;




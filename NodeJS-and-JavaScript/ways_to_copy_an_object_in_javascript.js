/*
Different Ways to Copy Objects:
There are multiple ways to copy an object, each with advantages and disadvantages:

1. Using “for-of” loop to iterate through the object properties
2. Using “JSON.parse” and “JSON.stringify”
3. Working with “Object.assign” function
4. Using “Object.create” to copy objects
5. Using recursion for object copying

*/

//Using for-in loop.
/*Here, the loop iterates through each property
of the object and copies the key - value pairs into the destination
object.

*/

// [] denotes an array.
// {} denotes an object.

var employData = {
  name: "Anshuman",
  age: 22,
  designation: "developer",
};

var destinationObject = {};

for (property in employData) {
  destinationObject[property] = employData[property];
}

// console.dir(destinationObject);
console.log(destinationObject);


// for-of will also do the same.

/*
Deep Copy of Object:

The object is said to be deep 
copied when each property to the 
object points to separate copy, even
if the property points to an object 
(reference values). A separate copy of 
the reference object is created for the
destination object. In case of deep 
copy, source object reference properties 
and destination object reference properties are 
pointing to different memory locations.

A summary of deep copy:

The destination object contains a separate copy of name, age,
 and designation. Separate instances of value types.
Separate Reference for Complex Objects is created.

*/

//Eg.

var userInfo = {
  name: "Anshuman",
  age: 22,
  designation: "developer",
  address: {
    streetNumber: 10,
    city: "Delhi",
    country: "India"
  }
}

var stringifiedObject = JSON.stringify(userInfo);

var newDeepCopy = JSON.parse(stringifiedObject);

console.dir(newDeepCopy)



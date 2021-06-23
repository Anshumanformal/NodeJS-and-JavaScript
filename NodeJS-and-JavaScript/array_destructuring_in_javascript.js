//Array destructuring.
// ES5
// const myproglang = ["js", "python", "c", "java", "php"];

// var ele1 = myproglang[0];
// var ele2 = myproglang[1];
// var ele3 = myproglang[2];

// console.log("The first element is " + ele1);
// console.log("The second element is " + ele2);
// console.log("The third element is " + ele3);

// ES6

const myproglang = ["js", "python", "c", "java", "php"];

let [ele1, ele2, ele3] = myproglang;
console.log("The first element is " + ele1);
console.log("The second element is " + ele2);
console.log("The third element is " + ele3);

//To find the length of the array.
console.log(`The length of the array is ${myproglang.length}`);


//To skip the elements / to print the first and last elements.
let [firstelement, , , , lastelement] = myproglang;
console.log(`The first programming language is ${firstelement} and the last
programming language is ${lastelement}`);




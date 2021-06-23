/*
1. Spread operator helps in deep copy of array.
2. It helps in pushing elements to the new array without
affecting the original array(which demonstrates deep copy).
*/

//Spread operator vs copy method.

let arr1 = [1, 2, 3];
//Suppose, I want to copy arr1 to another array and also
//push some new elements into the array.
//We can do this with the help of spread operator.

//Before concatenation.
console.log(arr1);

let arr2 = [...arr1, 4, 5];
//After concatenation.
console.log(arr2);

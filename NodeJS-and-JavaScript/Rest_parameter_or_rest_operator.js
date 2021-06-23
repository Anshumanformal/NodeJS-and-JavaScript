// Rest parameter or Rest operator.

// It helps to represent an indefinite
// number of arguments as an array. With
// the help of a rest parameter a function
// can be called with any number of arguments,
// no matter how it was defined. Rest parameter
// is added in ES2015 or ES6 which improved the
// ability to handle parameter.

//Without rest parameter.
// const fun = (a, b) => {
//   console.log("The sum is : ", a + b);
// };

// fun(1, 2); //Output - 3.
// fun(1, 2, 3, 4, 5); // Output is again 3.

//With ES6 rest paramter.
const fun = (...input) => {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  console.log("The sum is: ", sum);
};

fun(1, 2); //Output - 3.
fun(1, 2, 3, 4, 5); //Output - 15.

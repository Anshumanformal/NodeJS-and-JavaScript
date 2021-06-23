//Program to demonstrate the use of spread operator.

function sum(a, b, c) {
  console.log(a + b + c);
}

var arrval = [1, 2, 3];
sum(...arrval);

/* 
Note: 
1. Spread operator spreads the complete logic of the function on
the variable with which it is passed.

2. Here, '+' operation is made to spread across array variable 'arrval'
inside the function sum.
*/

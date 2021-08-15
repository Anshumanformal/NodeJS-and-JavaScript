//Function statement aka Function Declaration
function a(){
    console.log('a called');
}
a();

//Function expression
var b = function b(){
    console.log('b called');
}
b();

// Note: Difference between function statement(aka function declaration) and function expression.
// Answer: Hoisting. Upon hoisting function statement, no error is thrown. But upon hoisting function expression error is thrown.
// Reason : Creating function statement creates a memory block where a function is assigned.
// But in function expression, var b is initialized with an undefined value initially. Hence, before initializing 'b' again with a function, if we call b() then it will throw error.

//Anonymous function
// Usage: They are used at places where functions are used at values.
//Here, we are assigning the anonymous function to variable 'a2', otherwise an error of 'Uncaught SyntaxError: Function statements require a function name.'

const a2 = function (){
    console.log('a2 called');
}

//Named function expression
const myNamedFunctionExpression = function xyz(){
    console.log('named function expression called');
}

myNamedFunctionExpression();
// xyz() -->> This will throw an error. -->> Uncaught ReferenceError: xyz is not defined.

//Difference between parameters and arguments.

const b2 = function (param1,param2){
    // Within the functional scope the above labels are called params.
    console.log('b2 called');
}
b2(argument1,argument2); //These values which are passed are called arguments.

// First class functions.

// Ans: The ability of functions to be passed as an argument and received as a parameter and then return function from the function is called first class functions.
// Note: They are treated as value.
// Note: Functions are first class citizens.

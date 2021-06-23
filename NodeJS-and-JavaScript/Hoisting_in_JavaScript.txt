During compile phase, just microseconds before your code is executed, it is scanned
for function and variable declarations. 

All these functions and variable declarations 
are added to the memory inside a JavaScript data structure
called Lexical Environment. So that they can be used even before 
they are actually declared in the source code.


What is a Lexical Environment?

A lexical environment is a data structure that holds identifier-variable 
mapping. (here identifier refers to the name of variables/functions, and the
variable is the reference to actual object [including function object] or primitive value).

This is what a lexical environment conceptually look like:

LexicalEnvironment = {
  Identifier:  <value>,
  Identifier:  <function object>
}

So in short, a lexical environment is a place where variables and functions live during the program execution.


Hoisting of let, var and const variables:

//console.log(a);
//let a = 3;

//O/P --> ReferenceError: a is not defined.

So, how all variables are hoisted?

Ans.  All declarations (function, var, let, const and class) are 
hoisted in JavaScript, while the var declarations are initialized
with undefined, but let and const declarations remain uninitialized.

They will only get initialized when their lexical binding (assignment) 
is evaluated during runtime by the JavaScript engine. This means you
can’t access the variable before the engine evaluates its value at the
place it was declared in the source code. This is what we call “Temporal Dead Zone”,
a time span between variable creation and its initialization where they can’t be accessed.

If the JavaScript engine still can’t find the value of let or const variables at the line
where they were declared, it will assign them the value of undefined or return an 
error (in case of const).




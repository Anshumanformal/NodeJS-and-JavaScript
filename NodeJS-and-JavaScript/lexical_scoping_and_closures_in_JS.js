//Demonstration of lexical scoping in JavaScript.
/*
This is an example of lexical scoping, which 
describes how a parser resolves variable names
when functions are nested. The word lexical 
refers to the fact that lexical scoping uses 
the location where a variable is declared within
the source code to determine where that variable
is available. Nested functions have access to 
variables declared in their outer scope.
*/

function f1() {
  var n1 = "WOW";
  function f2() {
    console.log(n1);
  }

  f2();
}
f1();

//Closures in JavaScript:-

// Closures = functions + its lexical scope

/*
//Another example.

function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100

*/

//Object destructuring in JavaScript.

const bioData = {
  name: "Hello",
  age: 25,
  deg: "B.Tech",
  hobb: {
    first: "playing cricket",
    second: "studying",
  },
};

//Earlier method.
// console.log(`My name is ${bioData.name}`);

// ES6
// Here, same variable names should be used in order to get the values
// (i.e. destructure the array).
// If we put 'ages' in place of 'age' then the output will be undefined.

let { name, age, deg, hobb } = bioData;
//For alias.

// let {name : myname, age : myage, deg : degree, hobb: myhobby}.

console.log(`My name is ${name}, age is ${age} and degree is ${deg}. I love ${hobb.first} and also
I enjoy my time during ${hobb.second}.`);

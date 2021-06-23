//JavaScript Promises.

// "Producing code" is code that can take some time.

// "Consuming code" is code that must wait for the result.

// A Promise is a JavaScript object that links producing code and consuming code.

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("We are into the then block with message: " + message);
}).catch((message) => {
  console.log("We are into the catch block with message: " + message);
});

/*

Note:
1. JS Promises have three states during their execution:
--> Resolve
--> Reject
--> Pending

2. When promise is resolved --> .then is called
   When promise is rejected --> .catch is called

*/

// const recordVideoone = new Promise((resolve, reject) => {
//   resolve("Task 1 completed");
// });

// const recordVideotwo = new Promise((resolve, reject) => {
//   resolve("Task 2 completed");
// });

// const recordVideothree = new Promise((resolve, reject) => {
//   resolve("Task 3 completed");
// });

// //Promise.all function.
// /*
// Promise.all is actually a promise
// that takes an array of promises as an
// input (an iterable). Then it gets resolved
// when all the promises get resolved or
// any one of them gets rejected.

// */

// // Promise.all([recordVideoone, recordVideotwo, recordVideothree]).then(
// //   (messages) => {
// //     console.log(messages);
// //   }
// // );

// //Promise.race --> This prints the first promise which gets completed.

// Promise.race([recordVideoone, recordVideotwo, recordVideothree]).then(
//   (message) => {
//     console.log(message);
//   }
// );





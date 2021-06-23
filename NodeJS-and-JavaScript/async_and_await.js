// Async and Await.
// Async and Await make promises easier to write.
// Async makes a function return a Promise.
// Await makes a function wait for a Promise.

async function hello() {
  return (greeting = await Promise.resolve("Hello"));
}

hello().then(console.log);

//can also be done by:
//hello().then(()=>{
//console.log(hello)
//});

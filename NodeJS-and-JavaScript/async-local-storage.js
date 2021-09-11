//Illustration for Async local storage for Node.js
//Async Local Storage has slight performance penalty and we should use it only when necessary.


const express = require('express');
const app = express();

const port = 8000;
const { AsyncLocalStorage } = require('async_hooks');
const asyncLocalStorage = new AsyncLocalStorage();


const performSomeMoreWork = async () => {
    //Performing even more work.
    console.log('Performing work for',asyncLocalStorage.getStore());
}

const performSomeWork = async () =>{
    //Performing some work.
    await performSomeMoreWork();
}

let reqId = 0;

app.get('/', async(req,res) => {
    reqId++;
    asyncLocalStorage.run(reqId, async () => {
        await performSomeWork();
        res.sendStatus(200);
    })
})

app.listen(port, (error) => {
    if(error) console.log('Error:',error);
    console.log(`Server listening on http://localhost:${port}`);
})

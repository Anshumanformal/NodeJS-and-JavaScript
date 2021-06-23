const express = require('express');
const app = express();
const User = require('./models/User')
const connection = require('./connection/index');
const dayjs = require('dayjs');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

app.use(express.json());

app.get('/login',async(req,res)=>{
    try {
        let timeToUnblock;
        let doc = await User.findOne({email : req.body.email});
        if(!doc) throw new Error('User not found');

        if(doc.isBlocked == true){
            dayjs.extend(isSameOrAfter);
            if(new dayjs().isSameOrAfter(doc.lockUntil)){
                doc.isBlocked = false;
                doc.loginAttempts = 1;
                doc.lockUntil = 0;
                await doc.save();
                res.json({  
                    success : 200,
                    message : "You are now unblocked",
                    data : doc
                })
            }
            res.json({
                success : 400,
                message : "Your account is blocked.",
                data : `You are blocked till ${doc.lockUntil}`
        })      
        }

        //Block the user after 5 login attempts.
        if((doc.loginAttempts == 5 || doc.loginAttempts > 5) && doc.isBlocked == false){
            timeToUnblock = new dayjs().add(10,'s');
            doc.loginAttempts = 0;
            doc.isBlocked = true;
            doc.lockUntil = timeToUnblock;
            await doc.save();
            res.json({
                success : 400,
                message : 'You have exceeded the number of attempts to login.',
                data : `You are blocked till ${doc.lockUntil}`
            })
        }
        else {
            doc.loginAttempts  = doc.loginAttempts + 1;
        }
        await doc.save();
        res.json({
            success : 200,
            message : "User logged in successfully",
            data : doc
        })
    } catch (error) {
        console.log('Login error',error)
    }
})

app.listen(3000, (error)=>{
    if(error) throw new Error('Server not responding');
    console.log('Server working on PORT',3000);
});
const mongoose = require('mongoose'),
Schema = mongoose.Schema;


const UserSchema = new Schema({

    username: { type: String, index: { unique: true }},
    email : {type : String, default : ""},
    password: { type: String, required: true, default : "" },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date},
    isBlocked : {type : Boolean , default : false}
    });

module.exports = mongoose.model("User",UserSchema);
    
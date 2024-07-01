const mongoose = require("mongoose");
const {isEmail} = require("validator");

const userSchema = mongoose.Schema(
    {
        usename: {
            type: String,
            requied: true
        },
        email: {
            type: String,
            unique: true,
            validate: [ isEmail, 'invalid email' ],
            requied: true
        },
        password: {
            type: String,
            requied: true
        }
    }
)

const User = mongoose.model("user",userSchema);

module.exports = User;
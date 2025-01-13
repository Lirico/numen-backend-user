const {mongoose, Schema} = require('mongoose')

const UserSchema = Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true
    },
    rol: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema= new Schema({
    firstname: String,
    lastname: String,
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String
});
module.exports=mongoose.model("User", UserSchema);
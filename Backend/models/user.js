import mongoose from 'mongoose';

const { schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    password: String,
    age: Number,
    banned: Boolean    
})

const User = mongoose.model('User', UserSchema);


module.exports = User;
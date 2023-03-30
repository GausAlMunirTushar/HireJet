import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: validator.isEmail,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
        select: true
    },
    location: {
        type: String,
        default: "N/A",
    }
},{
    timestamps: true,
    versionKey: false
});

// middlewares
userSchema.pre('save', async function (){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
// compare password
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password)
    return isMatch;
}
// jsonwebtoken
userSchema.methods.generateToken = function (){
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}
// Model
const userModel = mongoose.model("User", userSchema);

export default userModel;
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
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

// Model
const userModel = mongoose.model("User", userSchema);

export default userModel;
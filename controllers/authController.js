import userModel from "../models/userModel.js";

const register = async (req, res, next) => {
        const { name, email, password } = req.body;
        // validate
        if(!name) {
            next('Name is required')
        }
        if(!email) {
            next('Email is required')
        }
        if(!password) {
            next('Password is required greather than 6 characters')
        }
        // check if user exists
        const exisitingUser = await userModel.findOne({ email });
        if(exisitingUser) {
            next('Email Already Register Please Login')
        }
        const user = await userModel.create({name, email, password});
        // Token 
        const token = user.generateToken();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user,
            token
        });
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    // validate
    if(!email && !password) {
        next('Email and Password is required')
    }
    // check if user exists find user
    const user = await userModel.findOne({email}).select("+password")
    if(!user) {
        next('Invalid UserName or Password')
    }
    // compare password
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        next('Invalid UserName or Password')
    }
    user.password = undefined;
    const token = user.generateToken()
    res.status(200).json({
        success: true,
        message: 'Login Successfully',
        user,
        token
    })
}



export {
    register,
    login
}
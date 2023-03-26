import userModel from "../models/userModel.js";

const register = async (req, res, next) => {
    try {
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
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

export {
    register,
}
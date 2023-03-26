import userModel from "../models/userModel.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // validate
        if(!name && !email && !password) {
            return res.status(400).json({
                success: false,
                error: "Please provide all required fields",
            });
        }
        // check if user exists
        const exisitingUser = await userModel.findOne({ email });
        if(exisitingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }
        const user = await userModel.create({name,email,password,});
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}


export {
    register,
}
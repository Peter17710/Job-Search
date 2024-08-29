import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../../db/models/userModel.js"




export const signUp = async (req, res, next) => {
    const { password } = req.body

    const hashedPassword = bcrypt.hashSync(password, 8)
    req.body.password = hashedPassword
    const users = userModel.insertMany(req.body)
    res.status(200).json({ message: "added", users })
}

export const signIn = async (req, res, next) => {
    const { email, mobileNumber, recoveryEmail, password } = req.body

    const users = await userModel.findOneAndUpdate({
        $or: [
            { email: email },
            { mobileNumber: mobileNumber },
            { recoveryEmail: recoveryEmail }
        ]
    }
        , { status: "online" })

        
    if (users) {
        let pass = bcrypt.compareSync(password, users.password)
        console.log(pass);
        
        if (pass) {
            let token = jwt.sign({ email, id: users._id }, "app")
            res.status(200).json({ message: "logged in successfully", token })
        }else{
            res.json({message:"password not match"})
        }

    }
    
    else {
        res.status(200).json("user not found")
    }
}


export const updateUser = async (req, res, next) => {
    const { email } = req.body
    const updated = await userModel.findByIdAndUpdate(req.user.id, req.body, { new: true })
    res.status(200).json({ message: "updated", updated })
}


export const deleteUser = async (req, res, next) => {
    const { id } = req.params

    const deleted = await userModel.findByIdAndDelete(id)
    res.status(200).json({ message: "deleted", deleted })
}

export const getUserData = async (req, res, next) => {
    const { email } = req.body
    const done = await userModel.findOne({ email })
    res.status(200).json({ message: "done", done })
}

export const getUserById = async (req, res, next) => {
    const { id } = req.params
    const done = await userModel.findById(id)
    res.status(200).json({ message: "done", done })
}

export const updatePassword = async (req, res, next) => {

    const { password, email, OTP } = req.body
    const hashedPassword = bcrypt.hashSync(password, 8)
    req.body.password = hashedPassword
    const users = await userModel.findOneAndUpdate({ email, OTP }, { password: hashedPassword })
    res.status(200).json({ message: "updated", users })


}

export const forgotPassword = async (req, res, next) => {
    const { email } = req.body
    const user = await userModel.findOne({ email })

    if (user) {
        const OTP = Math.floor(100000 + Math.random() * 900000).toString()

        user.OTP = OTP
        await user.save()
        res.status(200).json({ message: "OTP is sent", OTP })
    }
    else {
        res.status(404).json("User not found!!")
    }
}


export const getSpecificUser = async (req, res, next) => {
    const { recoveryEmail } = req.body
    const done = await userModel.findOne({ recoveryEmail })
    res.status(200).json({ message: "done", done })
}









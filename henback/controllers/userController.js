import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'


//auth user and get token
//POST/api/user/login
const authUser = asyncHandler(async(req, res) => {
    const {email, password} = await req.body

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            current_balance: user.current_balance,
            token: generateToken(user._id),
        })
    }
    else {
        res.status(401)
        throw new Error ('Invalid email or password')
    }
})

//Register a new user
//POST/api/users
//@access public
const registerUser = asyncHandler(async(req, res) => {
    const {firstName, lastName, email, password} = await req.body

    const userExists = await User.findOne({email})

   
    if (userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    })

    if (user) {
        res.status(201).json ({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            current_balance: user.current_balance,
            token: generateToken(user._id),
        })

    }

    else {
        res.status(400)
        throw new Error ('Invalid new data')
    }
})

//auth user profile
//GET/api/user/profile
const getUserProfile = asyncHandler(async(req, res) => {
    
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            current_balance: user.current_balance,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(404)
        throw new Erro ('User not found')
    }
})

//auth user profile
//PUT/api/user/profile
// @access Private
const updateUserProfile = asyncHandler(async(req, res) => {
    
    const user = await User.findById(req.user._id)

    if(user) {
        user.firstName = req.body.firstName || user.firstName,
        user.lastName = req.body.lastName || user.lastName,
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            current_balance: updatedUser.current_balance,
            token: generateToken(updatedUser._id),
        })
    }
    else {
        res.status(404)
        throw new Erro ('User not found')
    }
})

export {authUser, getUserProfile, registerUser, updateUserProfile}
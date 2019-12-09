const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {coder, user} = require('../models')

const SALT_ROUNDS = 11;
const TOKEN_KEY = "ahj"

const signUp = async (req,res) => {
    try{
        const {firstName, lastName, email, password} =req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await user.create({
            firstName,
            lastName,
            email,
            password_digest
        })
        const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName:user.lastName,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({user, token})
    }catch(error){
        console.log('You made it to the sign-up controller, but there was an error')
        return res.status(400).json({error: error.message})
    }
}
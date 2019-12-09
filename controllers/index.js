
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Coder, User} = require('../models')

const SALT_ROUNDS = 11;
const TOKEN_KEY = "ahj"

const signUp = async (req,res) => {
    try{
        const {firstName, lastName, email, password} =req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await User.create({
            firstName,
            lastName,
            email,
            password_digest
        })
        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({user, token})
    }catch(error){
        console.log('You made it to the sign-up controller, but there was an error')
        return res.status(400).json({error: error.message})
        
    }
}

const signIn = async (req, res) => {
	try {
		console.log(req.body)
		const { email, password } = req.body
		const user = await User.findOne({
			where: {
				email
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Invalid Credentials')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}


module.exports = {
    signUp,
    signIn,
}
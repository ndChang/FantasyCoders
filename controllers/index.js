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
    signIn,
    signOut
}
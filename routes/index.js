const {Router } = require('express')
const controllers =require('../controllers')
const router = Router()

router.get('/', (req,res) => res.send('This is root file for fantasy coder!'))
router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)

module.exports = router


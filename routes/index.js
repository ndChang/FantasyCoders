const {Router } = require('express')
const controllers =require('../controllers')
const router = Router()

router.get('/', (req,res) => res.send('This is root file for fantasy coder!'))
router.post('/users', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/users', controllers.getAllUsers)
router.get('/coders', controllers.getRosterFromUser)
// router.get('/coders/:id', controllers.getCoderByUserId)



module.exports = router

 
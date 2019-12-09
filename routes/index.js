const {Router } = require('express')
const controllers =require('../controllers')
const router = Router()
// const restrict = require('../helpers')

router.get('/', (req,res) => res.send('This is root file for fantasy coder!'))
router.post('/users', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/users', controllers.getAllUsers)



module.exports = router

 
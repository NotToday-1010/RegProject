const  Router  = require("express")
const PostController = require('./Controllers/PostControllers.js')

const router = Router()

router.post('/user/registration', PostController.create)
router.get('/users', PostController.getAll)
router.delete('/users/:id', PostController.delete)

module.exports = router
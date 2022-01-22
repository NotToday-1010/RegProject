const  Router  = require("express")
import PostController from'./Posts/PostControllers.js'

const router = Router()

router.post('/users', PostController.create)
router.delete('/users/:id', PostController.delete)

export default router
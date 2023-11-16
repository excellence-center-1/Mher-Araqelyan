const Router = require('express')
const router = new Router()
const videoController = require('../controllers/videoController')
const authMiddleware = require ('../middleware/authMiddleware')
router.post('/create',authMiddleware, videoController.create)
router.get('/list', authMiddleware,videoController.getAll)
module.exports = router
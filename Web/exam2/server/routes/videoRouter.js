const Router = require('express')
const router = new Router()
const videoController = require('../controllers/videoController')
const authMiddleware = require ('../middleware/authMiddleware')
router.post('/create',authMiddleware, videoController.create)
router.get('/list', authMiddleware,videoController.getAll)
router.delete('/',authMiddleware,videoController.delete)
router.put('/edit',authMiddleware,videoController.edit)
module.exports = router
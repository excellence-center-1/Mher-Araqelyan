const Router = require('express')
const router = new Router()
const videoController = require('../controllers/videoController')
const authMiddleware = require ('../middleware/authMiddleware')
const checkDuplicateMiddleware = require('../middleware/checkDuplicateMiddleware')
const checkDuplicate = checkDuplicateMiddleware(
    (user_id, category) => videoController.getVideos(user_id, category),
    (user_id, category) => videoController.getPublicVideos(user_id, category)
  );
router.post('/create', authMiddleware, checkDuplicate, videoController.create);
router.get('/list', authMiddleware,videoController.getAll)
router.delete('/',authMiddleware,videoController.delete)
router.put('/edit', authMiddleware, checkDuplicate, videoController.edit);
module.exports = router
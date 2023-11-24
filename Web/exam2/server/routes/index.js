const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const videoRouter = require('./videoRouter')
const categoryRouter = require('./categoryRouter')
router.use('/user', userRouter)
router.use('/video', videoRouter)
router.use('/category',categoryRouter)
module.exports = router
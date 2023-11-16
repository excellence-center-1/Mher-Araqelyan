const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const{Users,Videos} = require('../models/models')

const generateJwt = (email) => {
    return jwt.sign(
        { email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req, res,next) {
        const {email,password} =req.body
        if(!email || !password){
            return next(ApiError.badRequest('incorrect email or password'))

        }   
        const candidate = await Users.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('user with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await Users.create({email,password : hashPassword})
        const token = generateJwt(user.email)
        return res.json({token})   
    }

    async login(req, res,next) {
        const {email,password}=req.body
        const user = await Users.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal('user with this email not found'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.internal('incorrect password specified'))
        }
        const token = generateJwt(user.email)
        return res.json({token})
    }

    async check(req, res, next) {
        console.log(req.user)
        const token = generateJwt(req.user.email)
        return res.json({token})
    }
}
module.exports = new UserController()
const driverServices = require('../services/driverServices');
const jsend = require('jsend');

const signup = async (req, res,next) => {
    try{
        const {driver,token} = await driverServices.signup(req.body)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({driver,token}))
        return {driver,token}
    }catch(error){
        next(error) 
    }
}

const login = async (req, res,next) => {   
    try{
        const {email, password} = req.body
        const {driver,token} = await driverServices.login(email, password)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({driver,token}))
        return {driver,token}
    }catch(error){
        next(error) 
    }
}

module.exports = {
    signup,
    login
}
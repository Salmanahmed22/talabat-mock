const customerServices = require('../services/customerServices');
const jsend = require('jsend');

const signup = async (req, res,next) => {
    try{
        const {firstName, lastName, email, password, phoneNumber} = req.body
        const {customer,token} = await customerServices.signup(firstName, lastName, email, password, phoneNumber)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({customer,token}))
        return {user,token}
    }catch(error){
        next(error) 
    }
}

const login = async (req, res,next) => {   
    try{
        const {email, password} = req.body
        const {customer,token} = await customerServices.login(email, password)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({customer,token}))
        return {user,token}
    }catch(error){
        next(error) 
    }
}

module.exports = {
    signup,
    login
}
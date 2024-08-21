const customerServices = require('../services/customerServices');
const jsend = require('jsend');

const signup = async (req, res,next) => {
    try{
        const {firstName, lastName, email, password, phoneNumber} = req.body
        const {customer,token} = await customerServices.signup(firstName, lastName, email, password, phoneNumber)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({customer,token}))
        console.log(":) customer created: controller", customer);

        return {user,token}
    }catch(error){
        next(error) 
    }
}



module.exports = {
    signup
}
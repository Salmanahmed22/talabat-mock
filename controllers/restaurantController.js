const restaurantService = require('../services/restaurantService');
const jsend = require('jsend');

const signup = async (req, res,next) => {
    try{
        const {newRestaurant, token} = await restaurantService.signup(req.body);
        res.json(jsend.success({newRestaurant, token}));
        return {newRestaurant, token}
    }catch(error){
        next(error)
    }
}

const login = async (req, res,next) => {
    try{
        const {email, password} = req.body
        const {restaurant, token} = await restaurantService.login(email, password);
        res.json(jsend.success({restaurant, token}));
        return {restaurant, token}
    }catch(error){
        next(error)
    }
}

module.exports = {
    signup,
    login,
}
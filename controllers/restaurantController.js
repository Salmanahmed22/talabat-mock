const restaurantService = require('../services/restaurantService');
const jsend = require('jsend');

const signup = async (req, res,next) => {
    try{
        const {newRestaurant, token} = await restaurantService.signup(req.body);
        res.json(jsend.success({newRestaurant, token}));
        console.log("controller",newRestaurant);

        return {newRestaurant, token}
    }catch(error){
        next(error)
    }
}

module.exports = {
    signup
}
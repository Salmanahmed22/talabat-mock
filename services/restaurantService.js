const restaurantRepo = require('../repos/restaurantRepo');
const jwt = require('jsonwebtoken');
const signup = async (restaurant) => {
    try{
        const newRestaurant = await restaurantRepo.createRestaurant(restaurant);
        const token = jwt.sign({email: newRestaurant.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        console.log("service",newRestaurant);

        return {newRestaurant, token};
    }catch(err){
        throw err
    }
}

module.exports = {
    signup
}
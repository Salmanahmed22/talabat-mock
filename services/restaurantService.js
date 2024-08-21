const restaurantRepo = require('../repos/restaurantRepo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../Errors/UnauthorizedError');
const signup = async (restaurant) => {
    try{
        const newRestaurant = await restaurantRepo.createRestaurant(restaurant);
        const token = jwt.sign({email: newRestaurant.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return {newRestaurant, token};
    }catch(err){
        throw err
    }
}

const login = async (email, password) => {
    try{
        const restaurant = await restaurantRepo.findRestaurantByEmail(email);
        if(restaurant){
            const match = await bcrypt.compare(password, restaurant.password);
            if(match){
                const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
                return {restaurant, token};
            }else{
                throw new UnauthorizedError('wrong password');
            }
        }else{
            throw new UnauthorizedError('invalid restaurant');
        }    
    }catch(error){
        throw error
    }
}

module.exports = {
    signup,
    login,
    
}
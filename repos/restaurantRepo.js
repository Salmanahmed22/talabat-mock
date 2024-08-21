const Restaurant = require('../models/Restaurant');

const createRestaurant = async (restaurant) => {
    try{
        const newRestaurant = new Restaurant(restaurant);
        await newRestaurant.save();
        return newRestaurant;
    }catch(err){
        throw err;
    }
}

const findRestaurantByEmail = async (email) => {
    try{
        const restaurant = await Restaurant.findOne({email});
        return restaurant;
    }catch(err){
        throw err;
    }
}

module.exports = {
    createRestaurant,
    findRestaurantByEmail,
    
}
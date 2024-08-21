const Restaurant = require('../models/Restaurant');

const createRestaurant = async (restaurant) => {
    try{
        const newRestaurant = new Restaurant(restaurant);
        await newRestaurant.save();
        console.log("repo",newRestaurant);
        return newRestaurant;
    }catch(err){
        throw err;
    }
}


module.exports = {
    createRestaurant
}
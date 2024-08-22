const Driver = require('../models/Driver');

const createDriver = async (driver) => {
    try{
        const newDriver = new Driver(driver);
        await newDriver.save();
        return newDriver;
    }catch(err){
        throw err;
    }
}

const findDriverByEmail = async (email) => {
    try{
        const driver = await Driver.findOne({email});
        return driver;
    }catch(err){
        throw err;
    }
}

module.exports = {
    createDriver,
    findDriverByEmail,
    
}
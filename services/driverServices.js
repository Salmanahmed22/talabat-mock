const driverRepo = require('../repos/driverRepo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../Errors/UnauthorizedError');
const signup = async (driver) => {
    try{
        const newDriver = await driverRepo.createDriver(driver);
        const token = jwt.sign({email: newDriver.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return {newDriver, token};
    }catch(err){
        throw err
    }
}

const login = async (email, password) => {
    try{
        const driver = await driverRepo.findDriverByEmail(email);
        if(driver){
            const match = await bcrypt.compare(password, driver.password);
            if(match){
                const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
                return {driver, token};
            }else{
                throw new UnauthorizedError('wrong password');
            }
        }else{
            throw new UnauthorizedError('invalid driver');
        }    
    }catch(error){
        throw error
    }
}

module.exports = {
    signup,
    login,
    
}
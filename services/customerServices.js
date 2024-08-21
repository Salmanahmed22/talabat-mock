const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const customerRepo = require('../repos/customerRepo');
const UnauthorizedError = require('../Errors/UnauthorizedError');

const signup = async (firstName, lastName, email, password, phoneNumber)=>{
    try{
        const token = jwt.sign({firstName, lastName, email, password, phoneNumber}, config.jwt.secret, {expiresIn: '1h'});
        const customer = await customerRepo.createCustomer(firstName, lastName, email, password, phoneNumber);
        return {customer, token};
    }catch(error){
        throw error;
    }
}

const login = async (email, password)=>{
    try{
        const customer = await customerRepo.findCustomerByEmail(email);
        if(customer){
            const isMatch = await bcrypt.compare(password, customer.password);
            if(isMatch){
                const token = jwt.sign({email}, config.jwt.secret, {expiresIn: '1h'});
                return {customer, token};
            }else{
                throw new UnauthorizedError('wrong password');
            }
        }else{
            throw new UnauthorizedError('invalid user');
        }
    }catch(error){
        throw error;
    }
}

module.exports = {
    signup,
    login
}
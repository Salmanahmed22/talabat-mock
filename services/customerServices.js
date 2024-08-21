const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const customerRepo = require('../repos/customerRepo');
const signup = async (firstName, lastName, email, password, phoneNumber)=>{
    try{
        const token = jwt.sign({firstName, lastName, email, password, phoneNumber}, config.jwt.secret, {expiresIn: '1h'});
        const customer = await customerRepo.createCustomer(firstName, lastName, email, password, phoneNumber);
        console.log(":) customer created: service", customer);
        return {customer, token};
    }catch(error){
        throw error;
    }
}

const login = async (email, password)=>{
    try{
        const customer = await customerRepo.findCustomerByEmail(email);
        if(customer){}
    }catch(error){
        throw error;
    }
}

module.exports = {
    signup,
}
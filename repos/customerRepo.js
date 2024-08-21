const Customer = require('../models/Customer');

const createCustomer = async (firstName, lastName, email, password, phoneNumber) => {
    try {
        const customer = new Customer({
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        });
        await customer.save();
        return customer;
    } catch (error) {
        throw error;
    }
}

const findCustomerByEmail = async (email) => {
    try{
        const customer = await Customer.findOne({email});
        return customer;
    }catch(error){
        throw error
    }
}

module.exports = { 
    createCustomer,
    findCustomerByEmail
}
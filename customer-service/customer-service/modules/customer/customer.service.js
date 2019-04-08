(function(){
    'use strict';

    module.exports = {
        createCustomer: createCustomer,
        fetchCustomers: fetchCustomers,
        fetchCustomerById: fetchCustomerById,
        updateCustomer: updateCustomer
    };

    var CustomerModel = require('./customer.module')().CustomerModel;

    function fetchCustomers(){
        return CustomerModel.find({})
            .exec();
    }

    function createCustomer(customer){
        return CustomerModel.create(customer);
    }

    function fetchCustomerById(customerId){
        return CustomerModel.findById(customerId)
        .exec();
    }

    function updateCustomer(customerId, customer){
        return CustomerModel
            .findByIdAndUpdate(customerId, customer, {new: true})
            .exec();
    }

})();
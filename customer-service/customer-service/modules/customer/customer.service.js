(function(){
    'use strict';

    module.exports = {
        createCustomer: createCustomer,
        fetchCustomers: fetchCustomers,
        fetchCustomerById: fetchCustomerById
    };

    function fetchCustomers(){
        return CustomerModel.find({})
            .exec();
    }

    var CustomerModel = require('./customer.module')().CustomerModel;
    function createCustomer(customer){
        return CustomerModel.create(customer);
    }

    function fetchCustomerById(customerId){
        return CustomerModel.findById(customerId)
        .exec();
    }

})();
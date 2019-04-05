(function(){
    'use strict';

    module.exports = {
        createCustomer: createCustomer,
        fetchCustomers: fetchCustomers
    };

    function fetchCustomers(){
        return CustomerModel.find({})
            .exec();
    }

    var CustomerModel = require('./customer.module')().CustomerModel;
    function createCustomer(customer){
        return CustomerModel.create(customer);
    }

})();
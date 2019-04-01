var chai = require('chai');
var expect = chai.expect;

var CustomerModule = require('../../../modules/customer/customer.module');

describe('CustomerModule', function(){
    describe('customer.module file', function(){
        it ('should confirm CustomerModule function exists', function(){
            expect(CustomerModule).to.be.a('function');
        });

        it('should confirm CustomerModule function returns an object', function(){
            expect(CustomerModule()).to.be.a('object');
        });

        it('should confirm CustomerController function exist', function(){
            expect(CustomerModule().CustomerController).to.be.a('function');
        });
    });
});
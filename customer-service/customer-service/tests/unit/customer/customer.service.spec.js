'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var mongoose = require('mongoose');

var CustomerModule = require('../../../modules/customer/customer.module')();

var CustomerModel = CustomerModule.CustomerModel;
var CustomerService = CustomerModule.CustomerService;

var Fixtures = require('../../fixtures/fixtures');
var CustomerFixture = Fixtures.CustomerFixture;
var ErrorFixture = Fixtures.ErrorFixture;

var CustomerModelMock;


describe('CustomerService', function(){
    beforeEach(function(){
        CustomerModelMock = sinon.mock(CustomerModel);
    });

    afterEach(function(){
        CustomerModelMock.restore();

        mongoose.models = {};
        mongoose.modelSchemas = {};

        return mongoose.connection.close();
    });

    describe('createCustomer', function(){
        var newCustomer, expectedCreatedCustomer, expectedError;

        it('should successfully create new customer', function(){
            newCustomer = CustomerFixture.newCustomer;
            expectedCreatedCustomer = CustomerFixture.createdCustomer;
        });
    });
});
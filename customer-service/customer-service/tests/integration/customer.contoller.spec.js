'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var request = chai.request;

var app = require('../../app');
var Fixtures = require('../fixtures/fixtures');
var CustomerFixture = Fixtures.CustomerFixture;

var baseUri = '/customers';

var testData = {
    existingCustomer: {},
    modifiedCustomer: CustomerFixture.modifiedCustomer
};

describe('CustomerController', function(){
    describe('POST ' + baseUri, function(){
        it('should add new customer', function(done){
            request(app)
                .post(baseUri)
                .send(CustomerFixture.newCustomer)
                .end(function(err, res){
                    expect(res.status).to.equal(201);
                    expect(res.body).to.not.equal({});
                    expect(res.body._id).to.not.equal(undefined);
                    expect(res.body.firstName).to.equal(CustomerFixture.createdCustomer.firstName);
                    // done();
                });
                done();
        });
    });

    describe('GET ' + baseUri, function(){
        it('should get all customers', function(done){
            request(app)
                .get(baseUri)
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body).to.not.equal(undefined);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.not.equal(0);
                    testData.existingCustomer = res.body[0];
                    console.log('HERE22' + JSON.stringify(res.body[0]));
                   done();
                });
        });
    });

    describe('GET ' + baseUri + '/:customerId', function(){
        it('should get customer by id', function(done){
           request(app)
            .get(baseUri + '/' + testData.existingCustomer._id)
            .end(function(err, res){
                console.log(baseUri);
                console.log('HERE111: ' + JSON.stringify(testData.existingCustomer));
                console.log('HERE: ' + testData.existingCustomer._id);
                expect(res.status).to.equal(200);
                expect(res.body).to.not.equal(undefined);
                expect(res.body).to.deep.equal(testData.existingCustomer);
                expect(res.body.firstName).to.equal(testData.existingCustomer.firstName);
                // done();
            }); 
            done();
        });
    });

    describe('PUT ' + baseUri + '/:customerId', function(){
        it('should modify existing customer', function(done){
            testData.modifiedCustomer._id = testData.existingCustomer._id;
            request(app)
                .put(baseUri + '/' + testData.modifiedCustomer._id)
                .send(testData.modifiedCustomer)
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body).to.not.equal(undefined);
                    expect(res.body.firstName).to.equal(testData.modifiedCustomer.firstName);
                    expect(res.body.address).to.equal(testData.modifiedCustomer.address);
                });
                done();
        });
    });

    describe('DELETE ' + baseUri + '/:customerId', function(){
        it('should remove existing customer', function(done){
            request(app)
                .delete(baseUri + '/' + testData.existingCustomer._id)
                .end(function(err, res){
                    expect(res.status).to.equal(200);
                    expect(res.body.firstName).to.not.equal(undefined);
                    expect(res.body.firstName).to.equal(testData.existingCustomer.firstName);
                });
                done();
        });
    });
});
var chai = require('chai');
var expect = chai.expect;

var MongoDBModule = require('../../../modules/mongodb/mongodb.module');

describe('MongoDBModule', function(){
    describe('mongodb.module file', function(){
        it('Should test first behavior', function(){
            expect(MongoDBModule).to.be.a('object');
        });
    });
});
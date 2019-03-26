var chai = require('chai');
var expect = chai.expect;

var MongoDBUtil = require('../../../modules/mongodb/mongodb.module').MongoDBUtil;

describe('MongoDBUtil', function(){
    describe('mongodb.util file', function(){
        it('should confirm MongoDBUtil exist', function(){
            expect(MongoDBUtil).to.be.a('object');
        });

        it('should read the mongodb.module file', function(){
            expect(MongoDBUtil).to.be.a('object');
        });
    });
});
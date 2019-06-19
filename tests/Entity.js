/**
 *  The test script for the Entity class.
 */

// dependencies
const expect = require('chai').expect;
const Entity = require('../lib/Entity.js');

// test the Entity class
describe('Entity', () => {

    // test the name property
    describe('.name', () => {

        it('should get the name of the entity', () => {

            // construct the entity
            const entity = new Entity({ name: 'test' });

            // check if the name is set
            expect(entity.name).to.equal('test');
        });

        it('should set the name of the entity', () => {

            // construct the entity
            const entity = new Entity({ name: 'test' });

            // override the name
            entity.name = 'another';

            // check if the name is set
            expect(entity.name).to.equal('another');
        });
    });
});

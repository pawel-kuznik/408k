/**
 *  A test script for SquadType.
 */

// dependencies
const expect = require('chai').expect;
const SquadType = require('../lib/SquadType.js');

describe('SquadTemplate', () => {

    it('should be iterable', () => {

        // expect an iterator
        expect(SquadType[Symbol.iterator]).to.be.a('function');
    });

    it('should not allow for removal of types', () => {

        // expect the delete on SquadType to throw
        expect(() => { delete SquadType.hq; }).to.throw;
    });

    it('should not allow for modification of types', () => {

        expect(() => { SquadType.hq = 'other'; }).to.throw;
    });

    it('shoult not allow for adding new types', () => {

        expect(() => { SquadType.aNewOne = 'other'; }).to.throw;
    });
});

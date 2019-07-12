/**
 *  The test script to for the KeywordsList clas.
 */

// dependencies
const expect = require('chai').expect;
const KeywordList = require('../lib/KeywordList.js');

// test the Entity class
describe('KeywordsList', () => {

    // test the name property
    describe('.add()', () => {

        it('should add a keyword to the lust', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(true);
        });
    });

    describe('.delete()', () => {

        it('should delete a keyword from the list', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(true);

            // remove the keyword
            list.delete('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(false);
        });

        it('should delete a keyword from the list regarless the case', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(true);

            // remove the keyword
            list.delete('aaa');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(false);
        });
    });

    describe('.has()', () => {
        
        it('should return true only if the keyword is there', () => {

            // construct the keywords list
            const list = new KeywordList();

            // epxect that our keyword is not there
            expect(list.has('AAA')).to.equal(false);

            // add the keywords
            list.add('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(true);
        });

        it('should check case insensitive', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('AAA');

            // expect that the list has our keyword
            expect(list.has('AAA')).to.equal(true);
            expect(list.has('aaa')).to.equal(true);
            expect(list.has('Aaa')).to.equal(true);
            expect(list.has('aAa')).to.equal(true);
        });
    });
});

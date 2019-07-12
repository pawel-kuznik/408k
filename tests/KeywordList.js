/**
 *  The test script to for the KeywordsList clas.
 */

// dependencies
const expect = require('chai').expect;
const KeywordList = require('../lib/KeywordList.js');

// test the Entity class
describe('KeywordsList', () => {

    describe('.size', () => {

        it('should say 0 for new list', () => {

            // construct the keywords list
            const list = new KeywordList();

            // should be 0
            expect(list.size).to.equal(0);
        });

        it('should update after .add()', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add
            list.add('AAA');

            // should be 0
            expect(list.size).to.equal(1);
        });

        it('should update after .delete()', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add and delete
            list.add('AAA');
            list.delete('AAA');

            // should be 0
            expect(list.size).to.equal(0);
        });
    });

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

        it('should not add empty strings as keywords', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('');

            // expect that the list has our keyword
            expect(list.size).to.equal(0);
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

    describe('.troString()', () => {

        it('should return a string representation of the list separate with commas', () => {

            // construct the keywords list
            const list = new KeywordList();

            // add the keywords
            list.add('AAA');
            list.add('BBB');

            // check if the string matches
            expect(list.toString()).to.equal('AAA, BBB');
        });
    });

    describe('.fill()', () => {

        it('should fill the list with an Array', () => {

            // construct the list
            const list = new KeywordList();

            // add the keyword
            list.fill( ['AAA'] );

            // expect that the data is there
            expect(list.has('AAA')).to.equal(true);
        });

        it('should fill the list with a string', () => {

            // construct the list
            const list = new KeywordList();

            // add the keyword
            list.fill('AAA, BBB');

            // expect that the data is there
            expect(list.has('AAA')).to.equal(true);
            expect(list.has('BBB')).to.equal(true);
        });

        it('should fill the list with a not perfect string', () => {

            // construct the list
            const list = new KeywordList();

            // add the keyword
            list.fill('AAA, BBB,ccc,');

            // make sure we have only 3 valid keywords from the string
            expect(list.size).to.equal(3);

            // expect that the data is there
            expect(list.has('AAA')).to.equal(true);
            expect(list.has('BBB')).to.equal(true);
            expect(list.has('CCC')).to.equal(true);
        });
    });
});

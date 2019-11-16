/**
 *  A test script for SquadTemplate.
 */

// dependencies
const expect            = require('chai').expect;
const SquadTemplate     = require('../lib/SquadTemplate.js');
const SquadType         = require('../lib/SquadType.js');
const SquadComposition  = require('../lib/SquadComposition.js');
const TemplateStore     = require('../lib/TemplateStore.js');

describe('SquadTemplate', () => {

    // create a template store
    const store = new TemplateStore();

    describe('.powerRating', () => {

        it('should set/get power rating', () => {

            // construct a template
            const template = new SquadTemplate();

            // expect 0 initially
            expect(template.powerRating).to.equal(0);

            // set power rating
            template.powerRating = 5;

            // expect new value
            expect(template.powerRating).to.equal(5);
        });
    });

    describe('.type', () => {

        it('should be NULL initially', () => {

            // construct the template
            const template = new SquadTemplate();

            // make sure the type is initially null
            expect(template.type).to.be.a('null');
        });

        it('should be assignable by string', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign the type by string
            template.type = 'hq';

            // expect the type to change
            expect(template.type).to.be.equal(SquadType.hq);
        });

        it('should be assignable by SquadType instance', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign the type by object
            template.type = SquadType.hq;

            // expect the type to change
            expect(template.type).to.be.equal(SquadType.hq);
        });
    });

    describe('.factionKeywords', () => {

        it('should give access to keywords list', () => {

            // construct the template
            const template = new SquadTemplate();

            // make sure we have an object to deal with
            expect(template.factionKeywords).to.be.an('object');
        });

        it('should assign keywords by a string', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign new keywords
            template.factionKeywords = 'AAA, bbb';

            // make sure we have an object to deal with
            expect(template.factionKeywords.has('AAA')).to.equal(true);
            expect(template.factionKeywords.has('BBB')).to.equal(true);
        });

        it('should assign keywords by an array', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign new keywords
            template.factionKeywords = ['AAA', 'bbb'];

            // make sure we have an object to deal with
            expect(template.factionKeywords.has('AAA')).to.equal(true);
            expect(template.factionKeywords.has('BBB')).to.equal(true);
        });

        it('should assign keywords by an another keyword list', () => {

            // construct the template
            const template = new SquadTemplate();
            const another = new SquadTemplate();

            // add our keywords
            another.factionKeywords.add('AAA').add('bbb');

            // assign by another
            template.factionKeywords = another.factionKeywords;

            // make sure we have an object to deal with
            expect(template.factionKeywords.has('AAA')).to.equal(true);
            expect(template.factionKeywords.has('BBB')).to.equal(true);
        });
    });

    describe('.keywords', () => {

        it('should give access to keywords list', () => {

            // construct the template
            const template = new SquadTemplate();

            // make sure we have an object to deal with
            expect(template.keywords).to.be.an('object');
        });

        it('should assign keywords by a string', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign new keywords
            template.keywords = 'AAA, bbb';

            // make sure we have an object to deal with
            expect(template.keywords.has('AAA')).to.equal(true);
            expect(template.keywords.has('BBB')).to.equal(true);
        });

        it('should assign keywords by an array', () => {

            // construct the template
            const template = new SquadTemplate();

            // assign new keywords
            template.keywords = ['AAA', 'bbb'];

            // make sure we have an object to deal with
            expect(template.keywords.has('AAA')).to.equal(true);
            expect(template.keywords.has('BBB')).to.equal(true);
        });

        it('should assign keywords by an another keyword list', () => {

            // construct the template
            const template = new SquadTemplate();
            const another = new SquadTemplate();

            // add our keywords
            another.keywords.add('AAA').add('bbb');

            // assign by another
            template.keywords = another.keywords;

            // make sure we have an object to deal with
            expect(template.keywords.has('AAA')).to.equal(true);
            expect(template.keywords.has('BBB')).to.equal(true);
        });
    });

    describe('.composition', () => {

        it('should return SquadComposition instance', () => {

            // create a squad template instance
            const template = store.create(SquadTemplate);

            // make sure we expose squad composition
            expect(template.composition).to.be.instanceof(SquadComposition);
        });
    });
});

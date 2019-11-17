/**
 *  A script to test Squad class.
 */

// dependencies
const expect            = require('chai').expect;
const Squad             = require('../lib/Squad.js');
const TemplateStore     = require('../lib/TemplateStore.js');
const ListStore         = require('../lib/ListStore.js');

const examples = () => {

    const templates = new TemplateStore();

    const squadA = templates.createSquad({ name: 'squad A' });
    const squadB = templates.createSquad({ name: 'squad B' });

    const lists = new ListStore(templates);

    return {
        templates: templates,
        squadA: squadA,
        squadB: squadB,
        lists: lists
    };
};

describe('Squad', () => {

    describe('.template', () => {

        it('should give access to the squad template the squad was constructed with', () => {

            // get sample data
            const samples = examples();

            // construct the squad
            const squad = samples.lists.createSquad(samples.squadA);

            // expect the squad template is the same as the template passed in
            expect(squad.template).to.equal(samples.squadA);
        });
    });

    describe('.name', () => {
        
        it('should use the same name as the template', () => {

            // get sample data
            const samples = examples();

            // construct the squad
            const squad = samples.lists.createSquad(samples.squadA);

            // expect the squad template is the same as the template passed in
            expect(squad.name).to.equal(samples.squadA.name);
        });
    });
});

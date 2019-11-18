/**
 *  A script to test Modal class.
 */

// dependencies
const expect            = require('chai').expect;
const Model             = require('../lib/Model.js');
const TemplateStore     = require('../lib/TemplateStore.js');
const ListStore         = require('../lib/ListStore.js');

const examples = () => {

    const templates = new TemplateStore();

    const modelA = templates.createModel({ name: 'model A' });
    const modelB = templates.createModel({ name: 'model B' });

    const lists = new ListStore(templates);

    return {
        templates: templates,
        modelA: modelA,
        modelB: modelB,
        lists: lists
    };
};

describe('Model', () => {

    describe('.template', () => {

        it('should give access to the model template the model was constructed with', () => {

            // get sample data
            const samples = examples();

            // construct the model
            const model = samples.lists.createModel(samples.modelA);

            // expect the model template is the same as the template passed in
            expect(model.template).to.equal(samples.modelA);
        });
    });

    describe('.name', () => {
        
        it('should use the same name as the template', () => {

            // get sample data
            const samples = examples();

            // construct the model
            const model = samples.lists.createModel(samples.modelA);

            // expect the model template is the same as the template passed in
            expect(model.name).to.equal(samples.modelA.name);
        });
    });
});

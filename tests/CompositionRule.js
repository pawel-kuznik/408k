
// the dependencies
const expect            = require('chai').expect;
const CompositionRule   = require('../lib/CompositionRule.js'); 
const TemplateStore     = require('../lib/TemplateStore.js');
const ModelTemplate     = require('../lib/ModelTemplate.js');

describe('CompositionRule', () => {

    // we need a fully initialized model around, that means we need a template store
    const templateStore = new TemplateStore();

    // the fully initialized model
    const model = templateStore.createModel();

    describe('.model', () => {

        it('should return a model', () => {

            // the rule
            const rule = templateStore.create(CompositionRule);

            // assgin the model
            rule.model = model;

            // expect the ModelTemplate
            expect(rule.model).to.be.instanceof(ModelTemplate);

            // expect the model instances to match
            expect(rule.model).to.be.equal(model);
        });
    });

    describe('.replacementModel', () => {

        it('should return a model', () => {

            // the rule
            const rule = templateStore.create(CompositionRule);

            // assgin the model
            rule.replacementModel = model;

            // expect the ModelTemplate
            expect(rule.replacementModel).to.be.instanceof(ModelTemplate);

            // expect the model instances to match
            expect(rule.replacementModel).to.be.equal(model);
        });
    });
});

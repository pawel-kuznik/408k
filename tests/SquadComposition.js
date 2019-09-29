
// dependencies
const expect            = require('chai').expect;
const SquadComposition  = require('../lib/SquadComposition.js');
const TemplateStore     = require('../lib/TemplateStore.js');

describe('SquadComposition', () => {

    // construct a template store
    const templateStore = new TemplateStore();

    // create a model template
    const sgt = templateStore.createModel();
    const troop = templateStore.createModel();
    const medic = templateStore.createModel();

});

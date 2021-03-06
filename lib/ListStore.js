/**
 *  This is a class representing store for user lists (and related content).
 *  This class needs to be always connected to a template store.
 */

// dependencies
const ObjectStore = require('pocketdata').ObjectStore;

// the entities
const Squad = require('./Squad.js');
const Model = require('./Model.js');

// the privates
const templates = Symbol('templates');

// the entities
module.exports = class extends ObjectStore {

    /**
     *  The constructor.
     *  @param  TemplateStore       The object store with all of the templates.
     *  @param  pocketdata.Storage  The storage engine.
     */
    constructor(templatesStore, storage)  {

        // construct parent
        super(storage);

        // remember the templates store
        this[templates] = templatesStore;

        // register our entities
        this.register(Squad, 'squad');
        this.register(Model, 'model');
    }

    /**
     *  Get access to attached TemplatesStore
     *  @return TemplatesStore
     */
    get templates() { return this[templates]; }

    // convinience methods for Squad class
    createSquad(template)   { return this.create(Squad, { template: template.id }); }
    buildSquad(template)    { return this.build(Squad, { template: template.id }); }
    fetchSquad(id)          { return this.fetch(Squad, id); }
    fetchSquads()           { return this.fetchAll(Squad); }

    // convinience methods for Model class
    createModel(template)   { return this.create(Model, { template: template.id }); }
    buildModel(template)    { return this.build(Model, { template: template.id }); }
    fetchModel(id)          { return this.fetch(Model, id); }
    fetchModels()           { return this.fetchAll(Model); }
};

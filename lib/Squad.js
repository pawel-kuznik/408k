/**
 *  This is a class representing a squad inside a list. Each squad is based on
 *  a template and it holds a series of models that are also based on templates.
 *  The class is terable and it outputs models installed inside the squad.
 */

// dependencies
const Entity            = require('pocketdata').Entity;
const ConnectedEntities = require('pocketdata').ConnectedEntities;
const Model             = require('./Model.js');

// the privates
const template  = Symbol('template');
const models    = Symbol('models');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     *  @param  object  The data
     */
    constructor(data = { }) {

        // call the parent constructor
        super(data);

        // the template (when accessed via getter is it's lazy loaded)
        this[template] = data.template;

        // a collection that will hold models
        this[models] = new ConnectedEntities(this, Model);
    }

    /**
     *  Populate squad with base models.
     */
    populate() {

        // is is a brand new squad? then it should have all of the base models
        // already included. We need to include them now.
        this.template.composition.fill(this);
    }

    /**
     *  Get the squad name.
     *  @return string
     */
    get name() { return this.template.name; }

    /**
     *  Expose the template the squad confers to.
     *  @return SquadTemplate
     */
    get template() {

        // do we have a string? then we should fetch the template
        if (typeof(this[template]) == 'string') this[template] = this.root.templates.fetch(this[template]);

        // return the template
        return this[template];
    }

    /**
     *  Get access to all models connected to this squad.
     *  @return ConnectedEntities
     */
    get models() { return this[models]; }

    /**
     *  Cast the entity to plain object.
     *  @return object
     */
    toPlainObject() {

        // return the object
         return Object.assign(super.toPlainObject(), {
            template:   this.template.id,
            models:     Array.from(this.models).map(m => m.id),
        });
    }
};

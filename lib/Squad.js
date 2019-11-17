/**
 *  This is a class representing a squad inside a list. Each squad is based on
 *  a template and it holds a series of models that are also based on templates.
 *  The class is terable and it outputs models installed inside the squad.
 */

// get an entity
const Entity = require('pocketdata').Entity;

// the privates
const template = Symbol('template');

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
    get template () {

        // do we have a string? then we should fetch the template
        if (typeof(this[template]) == 'string') this[template] = this.root.templates.fetch(this[template]);

        // return the template
        return this[template];
    }

    /**
     *  Cast the entity to plain object.
     *  @return object
     */
    toPlainObject() {

        // return the object
        return Object.assign(super.toPlainObject(), {
            template: this.template.id    
        });
    }

    /**
     *  @todo Squad should allow iterating over the installed models (to be implemented)
     */
    /*
    [Symbol.iterator]* () {

        
    }
    */
};

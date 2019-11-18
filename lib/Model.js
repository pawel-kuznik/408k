/**
 *  This is a class that describes a model based on a certain template.
 */

// dependencies
const Entity = require('pocketdata').Entity;

// privates
const template = Symbol('template');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     *  @param  onject  The data object
     */
    constructor(data) {

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
     *  @return ModelTemplate
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
};

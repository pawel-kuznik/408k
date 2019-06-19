/**
 *  This is an entity describing an ability attached to squad. An ability is
 *  a name and a description of what the model/squad is suppose to do.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// dependencies
const Entity        = require('./Entity.js');

// the privates
const description   = Symbol('description');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     */
    constructor(data = { }) {

        // call the parent constructor
        super(data);

        /**
         *  The description of the ability.
         */
        this[description] = data.description;
    }

    // setter/setter for description
    get description() { return this[description]; }
    set description(newDescription) { this[description] = newDescription; }

    /**
     *  Cast the class to a plain object.
     *  @return object
     */
    toPlainObject() {

        // return the object
        return Object.assign({ }, super.toPlainObject(), {
            description:    this.description
        });
    }
};

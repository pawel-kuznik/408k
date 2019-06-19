/**
 *  This is a base for all entities.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// get an entity
const BaseEntity = require('pocketdata').Entity;

// the privates
const name = Symbol('name');

// export the class
module.exports = class extends BaseEntity {

    /**
     *  Construct the class
     */
    constructor(_data = { }) {

        // call parent constructor
        super(_data);

        /**
         *  The name of the entity
         */
        this[name] = _data.name || null;
    }

    // get/set the name
    get name()          { return this[name]; }
    set name(newValue)  { this[name] = newValue; }

    /**
     *  Get a plain object representation of the entity.
     *  @return Object
     */
    toPlainObject() {

        // return the object
        return Object.assign({ }, super.toPlainObject(), {
            name: this.name
        });
    }
};


/**
 *  This is a template for a weapon list. It represents a set of weapons that the
 *  user can choose from to equipt his models with.
 *  @author Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies
const Entity    = require('./Entity.js');
const Cache     = require('pocketdata').Cache;
const Weapon    = require('./WeaponTemplate.js');

// the privates
const weapons = Symbol('weapons');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     *  @param  object  The data object
     */
    constructor(data = { }) {

        // call the perent class
        super(data);

        /**
         *  The weapons.
         *  @param  Cache
         */
        this[weapons] = new Cache(Weapon, this, data.weapons || [ ]);
    }

    /**
     *  Get access to the weapons templates in this weapons list.
     *  @return Array
     */
    get weapons() { return this[weapons]; }

    /**
     *  Cast the object to plain object.
     *  @return object
     */
    toPlainObject() {

        // return the object class
        return Object.assign({ }, super.toPlainObject(), {
            weapons: this.weapons.toArray()
        });
    }
};

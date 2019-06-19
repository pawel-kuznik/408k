/**
 *  This is a class that describes a template for a weapon.
 *  @author     Pawel  Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies 
const Entity        = require('./Entity.js');
const WeaponProfile = require('./WeaponProfileTemplate.js');

// the privates
const points    = Symbol('points');
const profiles  = Symbol('profiles');

// export the class
module.exports = class extends Entity {

    /**
     *  Call the constructor
     */
    constructor(data = { }) {

        // call the parent constructor
        super(data);

        /**
         *  Set the points value of the weapon.
         *  @var    int
         */
        this[points]    = data.points || 0;

        /**
         *  The profiles of the weapon.
         *  @var    
         */
        this[profiles]  = (data.profiles || []).map(d => new WeaponProfile(this, d));
    }
    
    /**
     *  Get access to the points values of the weapon.
     *  @return value
     */
    get points() { return this[points]; }

    /**
     *  Set new points value.
     *  @param  int
     */
    set points(newValue) { this[points] = newValue; }

    /**
     *  Get access to the profiles of the weapon.
     *  @return Array
     */
    get profiles() { return this[profiles]; }

    /**
     *  Create a new weapon profile.
     *  @return WeaponProfile
     */
    createProfile() {

        // construct new profile
        let profile = new WeaponProfile(this);

        // push the profile
        this[profiles].push(profile);

        // return the new profile
        return profile;
    }

    /**
     *  Remove a given profile from the weapon
     *  @param  WeaponProfile
     */
    removeProfile(profile) {

        // get the index of the profile to remove
        let idx = this[profiles].indexOf(profile);

        // allow chaining
        if (idx == -1) return this;

        // remove the weapon profile from our stored ones
        this[profiles].splice(idx, 1);

        // allow chaining
        return this;
    }

    /**
     *  Convert to a plain object.
     *  @return object
     */
    toPlainObject() {
        return Object.assign({ }, super.toPlainObject(), {
            points:     this.points,
            profiles:   this.profiles.map(p => p.toPlainObject())
        });
    }
};

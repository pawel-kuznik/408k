/**
 *  This is a class defining the SquadType. The type can be one of:
 *
 *  - hq
 *  - troop
 *  - elite
 *  - fast attack
 *  - heavy support
 *  - transport
 *  - flyer
 *  - fortification
 *  - lord of war.
 *
 *  We have this class here so in code we can use a class instead of a string
 *  that can be written in different ways. In addition this class also contains
 *  ready to use instances that should be used in code for comparisson and so on.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the internal identifier
const identifier    = Symbol('identifier');
const label         = Symbol('label');

// the actual class that we will export
const Type = class {

    /**
     *  The constructor
     */
    constructor(_id, _label) {

        // set the identifier
        this[identifier] = _id;

        // set the label
        this[label] = _label;
    }

    /**
     *  Cast the type to string.
     *  @return     String
     */
    toString() {

        // return the identifier
        return this[identifier];
    }

    /**
     *  Get the label of the type.
     *  @return     String
     */
    get label() {

        // return the human friendly string
        return this[label];
    }
};

// export the class
module.exports = Object.freeze({
    
    // the types
    hq:             new Type('hq', 'HQ'),
    troop:          new Type('troop', 'Troop'),
    elite:          new Type('elite', 'Elite'),
    fastAttack:     new Type('fastAttack', 'Fast attack'),
    heavySupport:   new Type('heavySupport', 'Heavy support'),
    transport:      new Type('transport', 'Dedicated transport'),
    fortification:  new Type('fortification', 'Fortification'),
    lordOfWar:      new Type('lordOfWar', 'Lord of war'),

    // install an iterator
    [Symbol.iterator]: function* () {

        // iterate over the types in this very specific order
        for(let type of ['hq', 'troop', 'elite', 'fastAttack', 'heavySupport', 'transport', 'fortification', 'lordOfWar']) {

            // tield the type
            yield this[type];
        }
    }
        
});

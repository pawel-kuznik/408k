/**
 *  This is a class representing a squad template.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies
const Entity            = require('./Entity.js');
const Keywords          = require('./KeywordList.js');
const ModelTemplate     = require('./ModelTemplate.js');
const Ability           = require('./Ability.js');
const Entities          = require('pocketdata').ConnectedEntities;

// the privates
const models            = Symbol('models');
const abilities         = Symbol('abilities');
const factionKeywords   = Symbol('factionKeywords');
const keywords          = Symbol('keywords');
const type              = Symbol('type');

// export the class
module.exports = class extends Entity {

    /**
     *  Construct the object.
     *  @param  object  The plain object representing a squad.
     */
    constructor(_data = { }) {

        // call the parent
        super(_data);

        /**
         *  The type of the squad. This should be one of:
         *
         *      hq,
         *      troop,
         *      elite,
         *      fast,
         *      heavy,
         *      flyer,
         *      transport,
         *      fortification,
         *      lord
         *
         *  @var    string
         */
        this[type] = _data.type;

        /**
         *  The models templates that the squad can take.
         *  @var    Array
         */
        this[models] = new ConnectedEntities(this, ModelTemplate);
        if (_data.models) this[models].from(_data.models);


        /**
         *  The abilities the squad has.
         *  @var    Array
         */
        this[abilities] = new ConnectedEntities(this, Ability);
        if (_data.abilities) this[abilities].from(_data.abilities);

        /**
         *  The faction keywords of this squad.
         *  @var    Keywords
         */
        this[factionKeywords] = new Keywords(_data.factionKeywords);

        /**
         *  The regular keywords.
         *  @var    Keywords
         */
        this[keywords] = new Keywords(_data.keywords);
    }

    /**
     *  Get the type.
     *  @return string
     */
    get type() {
        return this[type];
    }

    /**
     *  A setter for the type.
     *  @param  string
     */
    set type(newType) {
        this[type] = newType;
    }

    /**
     *  Get access to the models that the squad can take.
     *  @return pocketdata.ConnectedEntities
     */
    get models() { return this[models]; }

    /**
     *  Set new collection of models
     *  @param  iterable    A collection of models to attach
     */
    set models(newVal) {

        // set the models from a new value
        this[models].from(Array.from(newVal));
    }

    /**
     *  Get access to the abilities.
     *  @return pocketdata.ConnectedEntities
     */
    get abilities() { return this[abilities]; }

    /**
     *  Set new collection of abilities
     *  @param  iterable    A collection of abilities to attach
     */
    set abilities(newVal) {
    
        // set the abilities from a new value
        this[abilities].from(Array.from(newVal));
    }

    /**
     *  Get access to the faction keywords
     *  @return Keywords
     */
    get factionKeywords() {
        return this[factionKeywords];
    }

    /**
     *  Get access to the keywords.
     *  @return Keywords
     */
    get keywords() {
        return this[keywords];
    }

    /**
     *  Get the simple object representation for this squad.
     *  @return object
     */
    toPlainObject() {

        // return the object from the super class and add our additional
        // properties
        return Object.assign({ }, super.toPlainObject(), {
            type:               this.type,
            models:             Array.from(this.models).map(m => m.id),
            abilities:          Array.from(this.abilities).map(a => a.id),
            keywords:           this.keywords.toPlainObject(),
            factionKeywords:    this.factionKeywords.toPlainObject(),
        });
    }
};

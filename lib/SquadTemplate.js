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
const SquadType         = require('./SquadType.js');

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
         *  The type of the squad.
         *  @var    SquadType
         */
        this[type] = _data.type ? SquadType[_data.type] : null;

        /**
         *  The models templates that the squad can take.
         *  @var    Array
         */
        this[models] = new Entities(this, ModelTemplate);
        if (_data.models) this[models].from(_data.models);


        /**
         *  The abilities the squad has.
         *  @var    Array
         */
        this[abilities] = new Entities(this, Ability);
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
     *  @return SquadType
     */
    get type() {
        return this[type];
    }

    /**
     *  A setter for the type.
     *  @param  string|SquadType
     */
    set type(newType) {

        // make sure we have a proper new type by converting the input to string
        // and asking the SquadType for an instance based on that string. 
        newType = SquadType[String(newType)];

        // set the new type (but ensure the object or NULL)
        this[type] = newType ? newType : null;
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
     *  Set a new value for the faction keywords.
     *  @param  Keywords|Array|String
     */
    set factionKeywords(newValue) {

        // do we have a string?
        if (typeof(newValue) == 'string') this.factionKeywords.fill(newValue);

        // do we have an array?
        if (Array.isArray(newValue)) this.factionKeywords.fill(newValue);

        // do we have another KeywordsList?
        if (newValue instanceof Keywords) this.factionKeywords.fill(Array.from(newValue));
    }

    /**
     *  Get access to the keywords.
     *  @return Keywords
     */
    get keywords() {
        return this[keywords];
    }

    /**
     *  Set a new value for the faction keywords.
     *  @param  Keywords|Array|String
     */
    set keywords(newValue) {

        // do we have a string?
        if (typeof(newValue) == 'string') this.keywords.fill(newValue);

        // do we have an array?
        if (Array.isArray(newValue)) this.keywords.fill(newValue);

        // do we have another KeywordsList?
        if (newValue instanceof Keywords) this.keywords.fill(Array.from(newValue));
    }


    /**
     *  Get the simple object representation for this squad.
     *  @return object
     */
    toPlainObject() {

        // return the object from the super class and add our additional
        // properties
        return Object.assign({ }, super.toPlainObject(), {
            type:               this.type ? this.type.toString() : null,
            models:             Array.from(this.models.clean()).map(m => m.id),
            abilities:          Array.from(this.abilities.clean()).map(a => a.id),

            keywords:           this.keywords.toPlainObject(),
            factionKeywords:    this.factionKeywords.toPlainObject(),
        });
    }
};

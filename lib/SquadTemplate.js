/**
 *  This is a class representing a squad template.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies
const Entity            = require('./Entity.js');
const Keywords          = require('./KeywordList.js');
const ModelTemplate     = require('./ModelTemplate.js');

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
        this[models] = _data.models || [ ];

        /**
         *  The abilities the squad has.
         *  @var    Array
         */
        this[abilities] = _data.abilities || [ ];

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
     *  @return     Array
     */
    get models() {

        // do we need to unpack the models?
        if (this[models].length && typeof(this[models][0]) == 'string') {

            // unpack all models and turn them into objects
            this[models] = this[models].map(id => this.root.fetchModel(id));
        }

        // return the models
        return Array.from(this[models]);
    }

    /**
     *  Get access to the abilities.
     *  @return Array
     */
    get abilities() {

        // do we need to unpack the abilities?
        if (this[abilities].length && typeof(this[abilities][0]) == 'string') {

            // unpack all abilities and turn them into objects
            this[abilities] = this[abilities].map(id => this.root.fetchAbility(id)).filter(a => !!a);
        }

        // return the abilities
        return Array.from(this[abilities]);
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
     *  Attach a certain model to a squad.
     *  @param  ModelTemplate   The template to attach.
     *  @return SquadTemplate
     */
    attachModel(model) {

        // add a model to the  models
        this[models].push(model);

        // allow chaining
        return this;
    }

    /**
     *  Detach a model from the squad template.
     *  @param  ModelTemplate
     */
    detachModel(model) {

        // get the idx of the model
        let idx = this[models].indexOf(model);

        // remove the model from the models array
        if (idx > -1) this[models].splice(idx, 1);

        // allow chaining
        return this;
    }

    /**
     *  Attach an ability to the squad
     *  @param  Ability
     */
    attachAbility(ability) {

        // push the ability to the array
        this[abilities].push(ability);

        // allow chaining
        return this;
    }

    /**
     *  Detach an ability from the squad.
     *  @param  Ability
     */
    detachAbility(ability) {

        // get the idx of the ability
        let idx = this[abilities].indexOf(ability);

        // remove the ability from the abilities array
        if (idx > -1) this[abilities].splice(idx, 1);

        // allow chaining
        return this;
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
            models:             this.models.map(m => m.id),
            abilities:          this.abilities.filter(a => !!a.id).map(a => a.id),
            keywords:           this.keywords.toPlainObject(),
            factionKeywords:    this.factionKeywords.toPlainObject(),
        });
    }
};

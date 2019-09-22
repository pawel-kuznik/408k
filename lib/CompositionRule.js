/**
 *  This is a composition rule. This class helps to define how a squad is composed.
 *  Rules are divided in two main groups: base and non-base ones. Base rules tell
 *  about models that should be in the very begining inside the squad. The non-base
 *  rules tell what kind of optional models can be included in the squad.
 *
 *  @author Paweł Kuźnik <pawel.kuznik@gmail.com>
 */

// the dependencies
const Entity = require('pocketdata').Entity;

// the privates
const data          = Symbol('data');
const model         = Symbol('model');
const replacement   = Symbol('replacement');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     *  @param  object  The data for the rule
     */
    constructor(_data = { }) {
        
        // call the parent
        super(_data);

        // the data
        this[data] = _data;
    }

    /**
     *  The model instalce.
     *  @return     ModelTemplate
     */
    get model() {
    
        // do we already have the model instance?
        if (this[model]) return this[model];

        // fetch the model instance from the root
        this[model] = this.root.fetchModel(this[data].model);

        // return the model instnance
        return this[model];
    };

    /**
     *  Set the model.
     *  @param      ModelTemplate
     */
    set model(value) {

        // store the ID
        this[data].model = value.id;

        // store the model
        this[model] = value;
    }

    /**
     *  The amount of models.
     *  @return     int
     */
    get count() { return this[data].count };

    /**
     *  Set the amount of models.
     *  @param      int
     */
    set count(value) { this[data].count = value; }

    /**
     *  The power rating of the model. This options is only relevant if the rule
     *  is not a base rule.
     *  @return     int
     */
    get powerRating() { return this[data].powerRating; }

    /**
     *  Set the power rating.
     *  @param      int
     */
    set powerRating(value) { this[data].powerRating = value; }

    /**
     *  Is the rule a base rule?
     *  @return     boolean
     */
    get base() { return this[data].base; }

    /**
     *  Set if the rule is a base one or not.
     *  @paaram     false
     */
    set base(value) { this[data].base = value; }

    /**
     *  Does this rule require to replace models?
     *  @return     ModelTemplate|null
     */
    get replacementModel() {

        // already stored? then return it
        if (this[replacement]) return this[replacement];

        // no model to fetch
        if (!this[data].replacementModel) return null;

        // store the replacement
        this[replacement] = this.root.fetchModel(this[data].replacementModel);

        // return the replacement model
        return this[replacement];
    }

    /**
     *  Set what model it replaces.
     *  @param      ModelTemplate|null
     */
    set replacementModel(model) {

        // update the ID
        this[data].replacementModel = model ? model.id : null;

        // store the model instance
        this[replacement] = model;
    }

    /**
     *  How many models should it replace?
     *  @return     int
     */
    get replacementCount() { return this[data].replacementCount; }

    /**
     *  Set how many models is teplaces
     *  @param      int
     */
    set replacementCount(value) { this[data].replacementCount = value; }

    /**
     *  Turn the rule into a plain object.
     *  @return     object
     */
    toPlainObject() {

        // return the object
        return Object.assign({ }, super.toPlainObject(), {
            model:              this.model.id,
            count:              this.count,
            powerRating:        this.powerRating,
            base:               this.base,
            replacementModel:   this.replacementModel ? this.replacementModel.id : null,
            replacementCount:   this.replacementCount
        });
    }
};

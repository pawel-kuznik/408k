/**
 *  This is a class that determines the squad composition. It tells what kind of
 *  models the squad can have and how many.
 */

// the dependencies
const Entity            = require('pocketdata').Entity;
const ConnectedEntities = require('pocketdata').ConnectedEntities;
const CompositionRule   = require('./CompositionRule.js');

// the privates
const rules         = Symbol('rules');

// export the class
module.exports = class extends Entity {

    /**
     *  The constructor.
     *  @param  object
     */
    constructor(data) {

        // call the parent
        super(data);

        // an array with all rules
        this[rules] = new ConnectedEntities(this, CompositionRule);
    }

    /**
     *  Get access to the rules.
     *  @return ConnectedEntities
     */
    get rules() { return this[rules]; }
     
    /**
     *  Check if the squad can add a specific amount of models.
     *  @param  iterable        The list of models.
     *  @param  ModelTemplate   What model to add
     *  @param  int             How much
     */
    canAdd(squad, model, count = 1) {

        // @todo implement me
    }

    /**
     *  Check if the squad can remove as specific amount of models.
     *  @param  iterable        The list of models.
     *  @param  ModelTemplate   What model to remove
     *  @param  int             How much
     */
    canRemove(squad, model, count = 1) {

        // @todo implement me
    }

    /**
     *  Fill squad with base model.
     *  @param  Squad
     */
    fill(squad) {

        // iterate over the rules and add models from the base ones
        for (let rule of this.rules) {

            // not a base rule? then we skip it
            if (!rule.base) continue;

            // add models to the collection
            for (let i = 0; i < rule.count; i++) squad.models.create({ template: rule.model.id });
        }
    }

    /**
     *  Convert the instance to a plain object.
     *  @return object
     */
    toPlainObject() {

        return Object.assign({ }, super.toPlainObject(), {
            rules:  Array.from(this.rules).map(r => r.id)
        });
    }
};

/**
 *  This is a class describing a single detachment.
 *
 *  @todo we need a DetachmentTemplate
 */

// dependecines
const Model             = require('./Model.js');
const Squad             = require('./Squad.js');
const ConnectedEntities = require('pocketdata').ConnectedEntities;

// privates
const squads            = Symbol('squads');

// export the class
module.exports = class extends Model {

    /**
     *  The constructor.
     *  @param  object  Data of the detachment
     */
    constructor(data) {

        // call the parent
        super(data);

        /**
         *  Squads belonging to this detachment.
         *  @var    ConnectedEntities
         */
        this[squads] = new ConnectedEntities(this, Squad);
    }

    /**
     *  Collection of squads assigned to thus detachment.
     *  @return ConnectedEntities
     */
    get squads() { return this[squads]; }

    /**
     *  Export detachment to a plain object representation.
     *  @param  object
     */
    toPlainObject() {

        // @todo handle storing squads
        return super.toPlainObject();
    }
};

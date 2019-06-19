/**
 *  This is a class represents a template for a model.
 *
 *  @author Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies
const Entity        = require('./Entity.js');
const Attributes    = require('./Attributes.js');

// the privates
const attributes    = Symbol('attributes');
const points        = Symbol('points');

// export the class
module.exports = class extends Entity {

    /**
     *  Construct the class
     *
     *  @param  object  The plain object representation of the model data.
     */
    constructor(data = { }) {

        // call the parent
        super(data);

        /**
         *  The points value for the model.
         *  @var    int
         */
        this[points] = data.points;

        /**
         *  The attributes of the model.
         *  @var    Attributes
         */
        this[attributes] = new Attributes(data.attributes);
    }

    /**
     *  Get access to the points value of the model.
     *  @return     int
     */
    get points() { return this[points]; }

    /**
     *  Get access to the attributes.
     *  @return     Attributes
     */
    get attributes() { return this[attributes]; }

    /**
     *  Cast the model to a simple object structure.
     *  @return     object
     */
    toPlainObject() {

        // get the base data
        let data = super.toPlainObject();

        // assign the attributes
        data.attributes = this[attributes].toPlainObject();

        // return the data
        return data;
    }
};

/**
 *  This is a class to describe power level profile. A power lever profile tells
 *  how much PL squad costs in certain states. For example, a marines squad
 *  might be worth 4 PL when it's a 5 man unit, but when bumped with another 5
 *  men it goes to 8 PL worth.
 *
 *  @author     Paweł Kuźnik <pawel.kuznik@gmail.com>
 */

// the privates
const data = Symbol('data');

// export the class
module.exports = class {

    /**
     *  The constructor.
     *  @param  Object  The data of the class.
     */
    constructor(_data = { }) {
    
        /**
         *  The data object.
         *  @var    Object
         */
        this[data] = _data;
    }

    /**
     *  Register a new step in the power levels.
     *
     *  @param  ModelTemplate   The model template that we want to register a power level.
     *  @param  int             The count of models to trigger the step.
     *  @param  int             The amount of power levels to count.
     */
    register(modeTemplate, count, powerLevels) {

        // allow chaining
        return this;
    }

    /**
     *  Get a plain object representation of the class.
     *  @return Object
     */
    toPlainObject() {
    
        return { };
    }
};

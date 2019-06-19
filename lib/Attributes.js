/**
 *  This is a class that represents attributes of a model.
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the privates
const data = Symbol('data');

// return the class
module.exports = class {

    /**
     *  The constructor
     *  @param  Object  The data of the attributes
     */
    constructor(_data = { }) {

        /**
         *  The data object.
         *  @var    Object
         */
        this[data] = _data;
    }

    /**
     *  Get the movement
     *  @return int
     */
    get movement() {

        // return the movement
        return this[data].movement;
    }

    /**
     *  Set the movement
     */
    set movement(newValue) {

        // set the movement
        this[data].movement = newValue;
    }

    /**
     *  Get the weapon skill
     *  @return string
     */
    get weaponSkill() {

        // return the weapon skill
        return this[data].weaponSkill;
    }

    /**
     *  Set weapon skill
     */
    set weaponSkill(newValue) {

        this[data].weaponSkill = newValue;
    }

    /**
     *  Get the ballistic skill
     *  @return string
     */
    get ballisticSkill() {

        // return the ballistic skill
        return this[data].ballisticSkill;
    }

    /**
     *  Set ballistic skill
     */
    set ballisticSkill(newValue) {

        this[data].ballisticSkill = newValue;
    }

    /**
     *  Get the strength of the model
     *  @return int
     */
    get strength() {

        // return the strength
        return this[data].strength;
    }

    /**
     *  Set the strength
     */
    set strength(newValue) {

        this[data].strength = newValue;
    }

    /**
     *  Get the thoughtness of the model.
     *  @return int
     */
    get thoughtness() {

        // return the thoughtness
        return this[data].thoughtness;
    }

    /**
     *  Set the thoughtness
     */
    set thoughtness(newValue) {

        this[data].thoughtness = newValue;
    }

    /**
     *  The number of wounds.
     *  @return int
     */    
    get wounds() {

        // return the number of wounds
        return this[data].wounds;
    }

    /**
     *  Set the wounds
     */
    set wounds(newValue) {

        this[data].wounds = newValue;
    }

    /**
     *  Get the number of attacks
     */
    get attacks() {

        // return the number of attacks
        return this[data].attacks;
    }

    /**
     *  Set the number of attacks
     */
    set attacks(newValue) {

        this[data].attacks = newValue;
    }

    /**
     *  Get the leadership value.
     *  @return int
     */
    get leadership() {

        // return the leadership
        return this[data].leadership;
    }

    /**
     *  Set the leadership
     */
    set leadership(newValue) {
        
        this[data].leadership = newValue;
    }

    /**
     *  Get the save 
     *  @return string
     */
    get save() {
        
        // retur the save test
        return this[data].save;
    }

    /**
     *  Set the save
     */
    set save(newValue) {

        this[data].save = newValue;
    }

    /**
     *  Get a plain object representation of the attributes
     *  @return Object
     */
    toPlainObject() {

        // return the data
        return {
            movement:       this.movement,
            weaponSkill:    this.weaponSkill,
            ballisticSkill: this.ballisticSkill,
            strength:       this.strength,
            thoughtness:    this.thoughtness,
            wounds:         this.wounds,
            attacks:        this.attacks,
            leadership:     this.leadership,
            save:           this.save
        };
    }
};

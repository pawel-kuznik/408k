/**
 *  This is a class that describes a template for a weapon profile.
 *  @author     Pawel  Kuznik <pawel.kuznik@gmail.com>
 */

// the privates
const template      = Symbol('template');
const name          = Symbol('name');
const type          = Symbol('type');
const strength      = Symbol('strength');
const damage        = Symbol('damage');
const abilities     = Symbol('abilities');
const armorPenetration = Symbol('armorPenetration');

// export the class
module.exports = class {

    /**
     *  The constructor.
     *  @param  WeaponTemplate
     *  @param  object
     */
    constructor(weaponTemplate, data = { }) {

        /**
         *  The weapon template instance that the weapon profile belongs to.
         *  @var    WeaponTemplate
         */
        this[template] = weaponTemplate;

        /**
         *  The name of the profile.
         *  @var    string 
         */
        this[name] = data.name || weaponTemplate.name;

        /**
         *  The type of the profile.
         *  @var    string
         */
        this[type] = data.type;

        /**
         *  The strength.
         *  @var    int
         */
        this[strength] = data.strength;

        /**
         *  The armor penetration value.
         *  @var    int
         */
        this[armorPenetration] = data.armorPenetration;

        /**
         *  The damage value of the weapon.
         *  @var    int
         */
        this[damage] = data.damage;

        /**
         *  The abilities of the weapon.
         *  @var    Array
         */
        this[abilities] = data.abilities || [];
    }

    /**
     *  Get the template.
     */
    get weapon() { return this[template]; }

    /**
     *  Get/set the name.
     */
    get name()  { return this[name]; }
    set name(v) { this[name] = v; }

    /**
     *  Get/set the type
     */
    get type()  { return this[type]; }
    set type(v) { this[type] = v; }

    /**
     *  Get/set the name
     */
    get strength()  { return this[strength]; }
    set strength(v) { this[strength] = v; }

    /**
     *  Get/set armor penetration
     */
    get armorPenetration()  { return this[armorPenetration]; }
    set armorPenetration(v) { this[strength] = v; }

    /**
     *  Get/set damage
     */
    get damage()    { return this[damage]; }
    set damage(v)   { this[damage] = v; }

    /**
     *  Get access to the abilities.
     *  @return Array
     */
    get abilities() {

        // do we need to unpack the abilities?
        if (this[abilities].length && typeof(this[abilities][0]) == 'string') {

            // unpack all abilities and turn them into objects
            this[abilities] = this[abilities].map(id => this[template].root.fetchAbility(id)).filter(a => !!a);
        }

        // return the abilities
        return Array.from(this[abilities]);
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
     *  Cast the object to a plain object.
     *  @return object
     */
    toPlainObject() {

        return {
            name:               this.name,
            type:               this.type,
            strength:           this.strength,
            armorPenetration:   this.armorPenetration,
            damage:             this.damage,
            abilities:          this.abilities.filter(a => !!a.id).map(a => a.id)
        };
    }
};

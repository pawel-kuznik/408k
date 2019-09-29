/**
 *  This is a object store class for all templates entities. This object
 *  store comes with preregistered template classes, and it's suitable to
 *  be used with following classes:
 *
 *      ModelTemplate   The entity responsible for presenting a template
 *                      of a single model. 
 *
 *      SquadTemplata   The entity responsible for presenting a template
 *                      of a squad.
 *
 *  @author     Paweł Kuźnik <pawel.kuznik@gmail.com>
 */

// dependencies
const ObjectStore = require('pocketdata').ObjectStore;

// the entities
const ModelTemplate     = require('./ModelTemplate.js');
const SquadTemplate     = require('./SquadTemplate.js');
const Ability           = require('./Ability.js');
const Weapon            = require('./WeaponTemplate.js');
const WeaponList        = require('./WeaponListTemplate.js');
const CompositionRule   = require('./CompositionRule.js');
const SquadComposition  = require('./SquadComposition.js');

// export the module
module.exports = class extends ObjectStore {

    /**
     *  The constructor.
     *
     *  @param  pocketdata.Storage  The storage engine.
     */
    constructor(storage) {
    
        // call the parent class constructor
        super(storage);

        // register our entities classes
        this.register(ModelTemplate, 'model');
        this.register(SquadTemplate, 'squad');
        this.register(Ability, 'ability');
        this.register(Weapon, 'weapon');
        this.register(WeaponList, 'weaponList');

        // register private classes
        this.register(CompositionRule, 'compositionRule');
        this.register(SquadComposition, 'squadComposition');
    }

    // convinience methods for the ability class
    createAbility() { return this.create(Ability); }
    buildAbility()  { return this.build(Ability); }
    fetchAbility(id){ return this.fetch(Ability, id); }
    fetchAbilities(){ return this.fetchAll(Ability); }

    // convinience methods for the squad class
    createSquad ()  { return this.create(SquadTemplate); }
    buildSquad()    { return this.build(SquadTemplate); }
    fetchSquad(id)  { return this.fetch(SquadTemplate, id); }
    fetchSquads()   { return this.fetchAll(SquadTemplate); }

    // convinience methods for the model class
    createModel()   { return this.create(ModelTemplate); }
    buildModel()    { return this.build(ModelTemplate); }
    fetchModel(id)  { return this.fetch(ModelTemplate, id); }
    fetchModels()   { return this.fetchAll(ModelTemplate); }

    // convinience methods for the weapon class
    createWeapon()  { return this.create(Weapon); }
    buildWeapon()   { return this.build(Weapon); }
    fetchWeapon(id) { return this.fetch(Weapon, id); }
    fetchWeapons()  { return this.fetchAll(Weapon); }

    // convinience methods for the weapon list class
    createWeaponList()  { return this.create(WeaponList); }
    buildWeaponList()   { return this.build(WeaponList); }
    fetchWeaponList(id) { return this.fetch(WeaponList, id); }
    fetchWeaponLists()  { return this.fetchAll(WeaponList); }
};

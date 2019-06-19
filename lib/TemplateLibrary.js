/**
 *  This is a class that presents an interface for getting and setting templates instances.
 *
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the dependencies
const SquadTemplate = require('./SquadTemplate.js');

// the privates
const squads = Symbol('squads');

// export the class
module.exports = class {

    /**
     *  The constructor. 
     */
    constructor() {

        /**
         *  A map with all squads templates.
         *  @var Map
         */
        this[squads] = new Map();


        // make the initial load
        this.reload();
    }

    /**
     *  Create a new squad that would be stored inside the library.
     *  @return SquadTemplate
     */
    createSquad() {

        // create a new squad inside the library
        let squad = new SquadTemplate();

        // set the squad in storage
        // this[squads].set(squad.id, squad);

        // returnthe squad
        return squad;
    }

    /**
     *  Fetch a squad by ID.
     *  @param  string  The ID of the squad
     */
    fetchSquad(id) {

        // return the squad instance
        return this[squads].get(id);
    }

    /**
     *  Delete certain squad
     *  @param  SquadTemplate
     */
    deleteSquad(squad) {

        // remove the squad
        this[squads].delete(squad.id);

        // allow chaining
        return this;
    }

    /**
     *  Store a specific squad.
     *
     *  @param  SquadTemplate
     */
    storeSquad(squad) {

        // store the squad
        this[squads].set(squad.id, squad);
    }

    /**
     *  Find squads.
     */
    findSquads() {

        // return the squads
        return Array.from(this[squads].values());
    }

    /**
     *  Push all changes to pernament storage.
     */
    flush() {

        // construct data object
        let data = JSON.stringify({
            squads: Array.from(this[squads].values()).map(s => s.toPlainObject())
        });

        // set the data inside the local storage
        window.localStorage.setItem('template-library', data);
    }

    /**
     *  Reload all data from pernament storage.
     */
    reload() {

        // get the template library from the local storage
        let rawData = window.localStorage.getItem('template-library');

        // no data to parse
        if (!rawData) return;

        // parse the data
        let data = JSON.parse(rawData);

        // parse all squads
        for(let s of data.squads) {

            // construct squad instance
            let squad = new SquadTemplate(s);

            // set the squad
            this[squads].set(squad.id, squad);
        }
    }
};

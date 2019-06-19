/**
 *  This is a class representing a list of keywords.
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// the privates
const keywords = Symbol('keywords');

// return the class
module.exports = class {

    /**
     *  The constructor.
     */
    constructor(data = { }) {

        /**
         *  A set representing the keywords.
         *  @var    Set
         */
        this[keywords] = new Set(data.keywords);
    }

    /**
     *  Add a keyword
     */
    add(keyword) {

        this[keywords].add(keyword);

        return this;
    }

    /**
     *  Remove a keyword
     */
    delete(keyword) {

        this[keywords].delete(keyword);

        return this;
    }

    /**
     *  Check if keyword is present
     */
    has(keyword) {

        return this[keywords].has(keyword);
    }

    /**
     *  Fill the object with new data. 
     */
    fill(newValue) {

        // clear the data first
        this.clear();

        // add all new data
        for (let k of newValue) this.add(k);

        // allow chaining
        return this;
    }

    /**
     *  Clear the object from data
     */
    clear() {

        this[keywords].clear();
        return this;
    }

    /**
     *  Return an interator so the object is iterable.
     */
    *[Symbol.iterator] () {

        // yield all keywords
        for(let k of this[keywords]) yield k;
    }

    /**
     *  Get the simple object representation.
     */
    toPlainObject() {

        return {
            keywords: Array.from(this[keywords])
        };
    }
};

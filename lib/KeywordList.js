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
     *  Add a keyword to the keywords list.
     *  @param  string
     *  @return KeywordsList
     */
    add(keyword) {

        // add a keyword to the set and make sure it's all uppercase
        this[keywords].add(String(keyword).toUpperCase());

        // allow chaining
        return this;
    }

    /**
     *  Remove a keyword
     */
    delete(keyword) {

        // remove the keyword using the uppercased version
        this[keywords].delete(String(keyword).toUpperCase());

        // allow chaining
        return this;
    }

    /**
     *  Check if keyword is present
     *  @param  String
     */
    has(keyword) {

        // check if an uppercase version of the keyword is in the set
        return this[keywords].has(String(keyword).toUpperCase());
    }

    /**
     *  A function that allows casting keywords to a string representation.
     *  @return String
     */
    toString() {
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

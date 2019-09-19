/**
 *  This is a class representing a list of keywords. For purposuse of manipulation or
 *  presentation keywords are case insensitive and if presenting the string, then
 *  upper case is preferred. 
 *
 *  The list only contains unique keywords and doesn't allow for empty keywords.
 *
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
     *  Get the size of the list.
     *  @return     int
     */
    get size() { return this[keywords].size; }

    /**
     *  Add a keyword to the keywords list.
     *  @param  string
     *  @return KeywordsList
     */
    add(keyword) {

        // don't add null or undefined
        if (keyword == null || typeof(keyword) == 'undefined') return this;

        // make sure it's a real string
        keyword = String(keyword);

        // don't add empty strings
        if (keyword == '') return this;

        // add a keyword to the set and make sure it's all uppercase
        this[keywords].add(keyword.toUpperCase());

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
     *  @return bool
     */
    has(keyword) {

        // check if an uppercase version of the keyword is in the set
        return this[keywords].has(String(keyword).toUpperCase());
    }

    /**
     *  This is a fuzzy version of has method. The provided keyword doesn't
     *  have to complete for this method to return true. It can be a part
     *  of one of the keywords.
     *  @param  string
     *  @return bool
     */
    includes(keyword) {

        // get the upper case version
        keyword = keyword.toUpperCase();

        // try to find a matching keyword
        return !!Array.from(this[keywords]).find(k => k.includes(keyword));
    }

    /**
     *  A function that allows casting keywords to a string representation.
     *  @return String
     */
    toString() {

        // join all the keywords together
        return Array.from(this).join(', ');
    }

    /**
     *  Fill the object with new data. 
     *  @param  String|Array    An array or a string representation of the
     *                          keywords list.
     *  @return KeywordList
     */
    fill(newValue) {

        // clear the data first
        this.clear();

        // handle a string
        if (newValue instanceof String || typeof(newValue) == 'string') return this.fill(newValue.split(/,\s?/));

        // assume an Array
        else newValue.map(this.add.bind(this));

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

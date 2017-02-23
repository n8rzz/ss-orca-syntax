import { ham as turkey } from 'mySandwich.js';

/*
  COMMENTS
  --------
  CLASS: punctuation.definition.comment.js
  TRIGGERS: js single line or comment blocks
*/

/**
 *
 * @class
 */
class Bread {
    /**
     *
     * @constructor
     * @param slices {number}
     */
    constructor(slices) {
        /**
         * @proeprty
         * @type {number}
         * @default 12
         */
        this.slices = 12;

        // Inline comments
        if ( slices > this.slices ) {
            console.log('not enough bread');
        } else {
            console.log(slices);
        }
    }
}

class Sandwich extends Bread {
    constructor(slices) {
        this.bread = super(slices);
        this.toppings = [];
    }

    toppings( ingredients ) {
        ingredients.forEach(function(value, index) {
            this.toppings.push( value );
        });
    }
}

const Club = new Sandwich(3).toppings(['roast beef', 'turkey']);
const myName = 'Slim Shady';
const template = 'Hello, my name is ${myName}';


function testFunction(string,arr,obj) {
// DO SOMETHING
}

testFunction('one', 'two', [1,2,3], {key: 'value'} );

try {
    testFunction();
} catch (e) {
    throw 'Whoopsadaisy!';
}

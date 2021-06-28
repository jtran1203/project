// Write your tests here!
const {polybius} = require('../src/polybius.js');
const expect = require('chai').expect;

describe('Polybius grid', () => {
  
    it("thinkful", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    } );
    
    it("It ignores capital letters", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    })
    

    
})


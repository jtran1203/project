// Write your tests here!
const {polybius} = require('../src/polybius.js');
const expect = require('chai').expect;

describe('Polybius grid', () => {

    it("It should  translates 42 to (i/j)'", () => {
        const outcome = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful";
        expect(outcome).to.eql(expected);

      });
  
    it("thinkful", () => {
        const outcome = polybius("thinkful");
        const expected = "4432423352125413";
        expect(outcome).to.eql(expected);
    } );
    
    it("It ignores capital letters and maintains spaces", () => {
        const outcome= polybius("Hello World");
        const expected = "3251131343 2543241341";
        expect(outcome).to.eql(expected);
    })
    



})


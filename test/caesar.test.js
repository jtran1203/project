// Write your tests here!
const {caesar} = require('../src/caesar.js');
const expect = require('chai').expect;

describe('Caesar shift', () => {
    it(`It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present`, () => {
        let outcome =( caesar("thinkful", 0) || caesar("thinkful", -26) || caesar("thinkful",  26));
      
        expect(outcome).to.be.false;
    })
    
    it(`It ignores capital letters,  maintains spaces,  and handles past the letter z`, () => {
        let outcome= (caesar("Zip Tie", 3));
        let expected = 'cls wlh';
        expect(outcome).to.equal(expected);
    })
    
    it(`(thinkful, 3) should be: wklqnixo`, () => {
        expect(caesar("thinkful", 3)).to.be.eql("wklqnixo");
    })
    
    it(`(thinkful, 3, false) should be: thinkful`, () => {
     
        expect(caesar("wklqnixo", 3, false)).to.be.eql("thinkful");
    })
    
    it(`(This is a secret message!, 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
        let outcome= caesar("This is a secret messge!", 8);
        let expected = 'bpqa qa i amkzmb umaaom!';
        expect(outcome).to.equal(expected);
    })
    
    it("If the shift value is not present, return false", () => {
        expect(caesar("thinkful")).to.be.false;
      });
       
}) 
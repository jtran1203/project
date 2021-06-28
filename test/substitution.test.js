// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require('chai').expect;

describe ("substitution", () => {
    it ("It returns false if the given alphabet isn't exactly 26 characters long.", () =>{
        const input = "keyword";
        const alphabet = "keywordabcfghijlmnpqstuvx";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });

    it ("It correctly translates the given phrase, based on the alphabet given to the function.", () =>{
        const input = "enigma";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "oibdhk";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    
    it ("It returns false if there are any duplicate characters in the given alphabet.", () =>{
        const input = "nomenclator";
        const alphabet = "keywordabcfghijlmnpqstuvxzz";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
   
    it ("It maintains spaces in the message, before and after encoding or decoding.", () =>{
        const input = "bletchley park";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "egoqyagox lknf";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
   
    it ("It ignores capital letters.", () =>{
        const input = "Atbash";
        const alphabet = "keywordabcfghijlmnpqstuvxz";
        const expected = "kqekpa";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });

});
// Write your tests here!
const {substitution} = require("../src/substitution.js")
const expect = require('chai').expect;

describe ("substitution", () => {
    it ("It returns false if the given alphabet isn't exactly 26 characters long.", () =>{
        const input = "think";
        const alphabet = "thinkdudesdadsda";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });

    it ("It correctly translates the given phrase, based on the alphabet given to the function.", () =>{
        const input = "hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "rmwwl";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
    
    it ("It returns false if there are any duplicate characters in the given alphabet.", () =>{
        const input = "rickroll";
        const alphabet = "xoyqmcgrukswaflnthdjpzibvv";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
   
    it ("It maintains spaces in the message, before and after encoding or decoding.", () =>{
        const input = "hello hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "rmwwl rmwwl";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
   
    it ("It ignores capital letters.", () =>{
        const input = "Hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "rmwwl";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });

});
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  function substitution(input, alphabet, encode = true) {
    let outcome = '';
    let secretWord = 'abcdefghijklmnopqrstuvwxyz'
    input = input.toLowerCase()


    function secret(word) {
      let obj = {};
      for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (obj[letter]) {return false;}
        else {obj[letter] = true;}
      }
      return true;
    }

    if (!alphabet || alphabet.length !== 26 || !secret(alphabet)) {
      return false;}
  

    
    alphabet = alphabet.split('')
  
    let final = {}
    let decode = {}
    
    secretWord.split('').forEach((something, index) => {
      final[something] = alphabet[index]
      decode[alphabet[index]] = something
    })
    if(!encode) final= decode
    input.split('').forEach(input => {
      outcome += input === ' ' ? ' ' : final[input]
    })
    return outcome
   }
  
   return {
     substitution,
   };
  })();

module.exports = { substitution: substitutionModule.substitution };


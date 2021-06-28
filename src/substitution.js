// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let final = "";
    let normalAlphabets = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
   

    function secret(str) {
      let obj = {};
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (obj[char]) return false;
        else obj[char] = true;
      }
      return true;
    }

    try {
      if (!alphabet || alphabet.length !== 26 || !secret(alphabet)) {
        throw false;
      } else if (encode) {
        for (let i = 0; i < input.length; i++) {
          let index = normalAlphabets.indexOf(input[i]);
          console.log(index);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += alphabet[index];
          }
        }
      } else if (!encode) {
        for (let i = 0; i < input.length; i++) {
          let index = alphabet.indexOf(input[i]);
          console.log(index);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += normalAlphabets[index];
          }
        }
      }
      return final;
     catch (error) {
      return error;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
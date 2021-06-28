// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {


  function caesar(input, shift, encode = true) {



    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    if (encode == false) {
      shift = -shift
    }


    let finalText = ""
    let index = 0
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let inputWord = input.charCodeAt(i);
      index = inputWord + shift

      if (inputWord < 65 || inputWord > 122 ||
        (inputWord > 90 && inputWord < 97)
      ) {
        finalText += input[i]
      } else {
        if (inputWord + shift < 97) {
          let wrapAround = 97 - (inputWord + shift);
          inputWord = 123 - wrapAround
        } else if (inputWord + shift >= 123) {
          let wrapAround = 123 - (inputWord + shift);
          inputWord = 97 - wrapAround
          console.log(wrapAround)
        } else {
          inputWord += shift
        }

        finalText += String.fromCharCode(inputWord);
      }
    }
    return finalText
  }
  return {
    caesar
  };
})()

     
module.exports = { caesar: caesarModule.caesar };



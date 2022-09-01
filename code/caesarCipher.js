// Receives a string as input, then returns it after processing through the Caesar cipher with a character shift of 1

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const capAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetArray = alphabet.split('');
const capsArray = capAlphabet.split('');

const caesar = (input) => {
    const inputArray = input.split('');
    let caesarLetter;
    let caesarArray = [];
    let letterIndex;

    for (let i = 0; i < inputArray.length; i++) {
        // Handles lowercase letters in user input
        if (alphabetArray.includes(inputArray[i])) {
            if (inputArray[i] === 'z') {
                caesarLetter = 'a';
            } else {
                letterIndex = alphabetArray.indexOf(inputArray[i]);
                caesarLetter = alphabetArray[letterIndex + 1];
            }

        // Handles capital letters in user input
        } else if (capsArray.includes(inputArray[i])) {
            if (inputArray[i] === 'Z') {
                caesarLetter = 'A';
            } else {
                letterIndex = capsArray.indexOf(inputArray[i]);
                caesarLetter = capsArray[letterIndex + 1];
            }

        // Handles punctuation/spaces/numbers/etc. in user input
        } else {
            caesarLetter = inputArray[i];
        }
        
        caesarArray.push(caesarLetter); 
    };

    return caesarArray.join('');
};

module.exports = caesar;
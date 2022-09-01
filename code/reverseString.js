const reverseString = (input) => {
    let string = input.toString();

    return string.split('').reverse().join('');
}

module.exports = reverseString;
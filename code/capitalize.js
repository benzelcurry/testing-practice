const capitalize = () => {
    const string = 'this is the string';
    const firstLetter = string.charAt(0).toUpperCase();
    const restOfString = string.substring(1);

    return firstLetter + restOfString;
}

module.exports = capitalize;
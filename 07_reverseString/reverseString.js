const reverseString = function(str) {
    let splitString = str.split("");
    let reverseString = [];

    while (splitString.length > 0) {
        reverseString.push(splitString.pop());
    }

    return reverseString.join("");
};

// Do not edit below this line
module.exports = reverseString;

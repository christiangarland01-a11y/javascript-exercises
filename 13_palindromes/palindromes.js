const palindromes = function (str) {
    let regex = /[a-zA-Z0-9]/;
    let oldString = str.toLowerCase().split('').filter(char => regex.test(char)).join('');
    let newString = oldString.split('').toReversed().join('');
    return oldString === newString;
};

// Do not edit below this line
module.exports = palindromes;

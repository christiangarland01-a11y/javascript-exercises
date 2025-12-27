const removeFromArray = function(arr, ...manyMoreArgs) {
    return arr.filter(item => !manyMoreArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

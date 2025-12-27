const sumAll = function(x, y) {
    if ((Number.isInteger(x) && x > 0) && (Number.isInteger(y) && y > 0)) {
        let total = 0;

        if (x - y < 0) {
            for (let i = x; i <= y; i++) {
                total += i;
            }
        } else {
            for (let i = y; i <= x; i++) {
                total += i;
            }
        }

        return total;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

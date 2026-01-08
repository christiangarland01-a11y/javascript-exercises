function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    };

    return death - birth
};

const findTheOldest = function(people) {
    return people.reduce((oldest, next) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let nextAge = getAge(next.yearOfBirth, next.yearOfDeath);
        return oldestAge > nextAge ? oldest : next;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

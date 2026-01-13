function getDataProperties(data) {
    data.forEach((currItem) => {
        getDataSpecialness(currItem);
        getDataAdvancedness(currItem);
    });
};

function getDataSpecialness(item) {
    if (item.isSpecial) {
        if (item.value > 30 && item.value <= 70) {
            item.specialResult = "Intermediate Special";
        } else {
            item.specialResult = "Extreme Special";
        }
    } else {
        item.specialResult = "Not Special";
    }
};

function getDataAdvancedness(item) {
    if (item.details.importance > 3) {
        if (item.details.complexity > 5) {
            item.advancedResult = "High Importance, High Complexity";
        } else {
            item.advancedResult = "High Importance, Low Complexity";
        }
    } else {
        item.advancedResult = "Low Importance";
    }
};

module.exports = { getDataProperties };
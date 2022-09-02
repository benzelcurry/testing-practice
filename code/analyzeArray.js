// Takes an array of numbers and returns their average, min value, max value, and length

const analyze = (...nums) => {
    return {
        average: average(...nums),
        min: minValue(...nums),
        max: maxValue(...nums),
        length: [...nums].length
    }
}

const average = (...nums) => {
    let amount = [...nums];
    let totalNums = amount.length;
    let sum = 0;

    for (let i = 0; i < totalNums; i++) {
        sum += amount[i];
    }

    return sum / totalNums;
}

const minValue = (...nums) => {
    let amount = [...nums];
    let lowest;

    for (let i = 0; i < amount.length; i++) {
        if (lowest === undefined) {
            lowest = amount[i];
        } else if (amount[i] < lowest) {
            lowest = amount[i];
        }
    }

    return lowest;
}

const maxValue = (...nums) => {
    let amount = [...nums];
    let highest;

    for (let i = 0; i < amount.length; i++) {
        if (highest === undefined) {
            highest = amount[i];
        } else if (amount[i] > highest) {
            highest = amount[i];
        }
    }

    return highest;
}

module.exports = analyze;
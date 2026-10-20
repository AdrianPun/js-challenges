// expected output: the average of all numbers: 85

let highScores = [100, 90, 80];

// A developer tries to use the array like a dictionary
highScores[3] = 70;

let total = 0;
for (let key in highScores) {
    total += highScores[key];
}
console.log("Average score: " + total / highScores.length);
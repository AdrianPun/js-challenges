// Expected value: the average of the numerical daily temperature values

let dailyTemperatures = [70, 75, 80];

// The sensor missed a few days, so we insert the next reading at index 10
dailyTemperatures[10] = 85;

let sum = 0;
// A traditional C-style for loop
for (let i = 0; i < dailyTemperatures.length; i++) {
    if(dailyTemperatures[i]){
        sum += dailyTemperatures[i];
    }
}
console.log("Average temp: " + sum / dailyTemperatures.length);


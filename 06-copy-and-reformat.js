/* Your task is to create a function called copyFormatted(obj) that
creates a copy of obj with the following formatting applied:
- All strings are converted to lowercase
- All numbers are rounded to 2 decimal places
- obj should not be modified in any way
- you can assume the object's properties can have values that are limited to 
primitives or other objects with the same limitations (ie. no arrays, sets, etc.)
*/


function copyFormatted(obj) {
    // implement here
    return null;
}

const data = {
    name: "BiLLy bOb JoE",
    monthlySalary: 100000 / 12,
    team: "enGinEErinG",
    stats: {
        model: "Gemini",
        tokensUsed: 3125917.667,
    },
    isActive: true,
}

const formattedData = copyFormatted(data);

console.log(data);
console.log(formattedData);
console.assert(formattedData !== data);

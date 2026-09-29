// expected output: User: Alice

console.log(formatName(capitalize("alice")));

// Standard function declaration
function formatName(name) {
    return "User: " + capitalize(name);
}

// Function expression assigned to a variable
var capitalize = function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};


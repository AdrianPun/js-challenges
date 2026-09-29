// Expected Output: "HardcoreGamer starts with 0 extra lives."

function initializePlayer(username, startingExtraLives) {
    // If no values are provided, fall back to defaults
    let name = username || "Guest";
    let extraLives = startingExtraLives || 3;
    
    console.log(name + " starts with " + extraLives + " extra lives.");
}

// We want a hard-mode player with 0 extra lives
initializePlayer("HardcoreGamer", 0);



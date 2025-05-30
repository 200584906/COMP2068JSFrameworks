const prompt = require('prompt');

// Initialize and start the prompt module to take input from the user
prompt.start();

// Define the expected input schema, specifying the allowed options
const inputSchema = {
  properties: {
    playerChoice: {
      description: 'Select ROCK, PAPER, or SCISSORS', // Prompt message shown to the user
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,            // Validation pattern for user input (case-insensitive)
      message: 'Input must be ROCK, PAPER, or SCISSORS', // Error message shown if input does not match the pattern
      required: true                                  // Input is mandatory
    }
  }
};

// Retrieve user input according to the schema defined above
prompt.get(inputSchema, function (error, response) {
  // Handle any errors during input collection
  if (error) return console.error(error);

  // Convert the user's choice to uppercase to standardize for comparison
  const playerChoice = response.playerChoice.toUpperCase();

  // Generate a random number between 0 and 1 to simulate system's move selection
  const randomValue = Math.random();

  // Initialize variable to store system's choice based on random selection
  let systemChoice = '';

  // Assign system's choice by dividing the range of random numbers into three equal intervals
  if (randomValue <= 0.34) {
    systemChoice = 'PAPER';
  } else if (randomValue <= 0.67) {
    systemChoice = 'SCISSORS';
  } else {
    systemChoice = 'ROCK';
  }

  // Output the player's and system's choices to inform the user
  console.log(`Player chose: ${playerChoice}`);
  console.log(`System chose: ${systemChoice}`);

  // Determine the game result by comparing player's choice and system's choice
  if (playerChoice === systemChoice) {
    // Case when both choices are identical results in a draw
    console.log("It's a draw");
  } else if (
    // Winning scenarios for the player
    (playerChoice === 'ROCK' && systemChoice === 'SCISSORS') ||
    (playerChoice === 'PAPER' && systemChoice === 'ROCK') ||
    (playerChoice === 'SCISSORS' && systemChoice === 'PAPER')
  ) {
    // Inform the player they have won in these scenarios
    console.log("Player Wins");
  } else {
    // Any other scenario results in system winning the game
    console.log("System Wins");
  }
});



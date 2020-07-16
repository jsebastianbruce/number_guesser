let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const userDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return userDifference <= computerDifference;
}

const updateScore = (string) => {
    if (string === 'user') {
        humanScore++;
    } else if (string === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
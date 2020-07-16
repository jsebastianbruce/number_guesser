let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random * 10)
};

const compareGuesses = (user, computer, secret) => {
    const userDifference = Math.abs(secret - user);
    const computerDifference = Math.abs(secret - computer);
    return user <= computer;
};

const updateScore = string => {
    if (string === 'human') {
        humanScore++;
    } else if (string === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
}
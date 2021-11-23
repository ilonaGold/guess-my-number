'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
        // When no input
    if (!guess) {
        displayMessage('⛔️ No number!');

        // When the player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Implementing highscores
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When the guess is wrong
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);  
        } else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    } 
});

// Reset the game
document.querySelector('.again').addEventListener('click', function() {
    secretNumber; 
    score = 20;
    displayNumber('?');
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    displayScore(score);
});





















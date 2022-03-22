'use strict';

/*
 * Setting the highest score to zero and the number
 * of trials to 10 and generate a random number
 */
let highestScore = 0;
let numOfTrials = 10;
let randomNum = Math.floor(Math.random() * 20 + 1);

// Setting up variables for the
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const highestS = document.querySelector('.highscore');
let guessingNum = document.querySelector('.guess').value;

/*
 * If the Check btn is clicked
 */
document.querySelector('.check').addEventListener('click', function () {
  // If the user doesn't enter any number
  if (!guessingNum) {
    message.textContent = 'No Number here';
  }
  // If the user has entered a number
  else {
    // If he/she has entered a correct number
    if (randomNum == guessingNum) {
      message.textContent = 'Right';
      score.textContent = numOfTrials;
      number.textContent = randomNum;
      if (numOfTrials > highestScore) {
        highestScore = numOfTrials;
        highestS.textContent = numOfTrials;
      }
      numOfTrials = 10;
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
    // IF he/she ha entered a number higher than the correct number
    else if (randomNum < guessingNum) {
      message.textContent = 'Too High';
      score.textContent = numOfTrials;
      numOfTrials--;
    }
    // IF he/she ha entered a number lower than the correct number
    else {
      message.textContent = 'Too Low';
      score.textContent = numOfTrials;
      numOfTrials--;
    }
  }
});

/*
 * If the again btn is clicked
 */
document.querySelector('.again').addEventListener('click', function () {
  // Reset the number of possible trials
  numOfTrials = 10;
  // Reset the random secret number
  randomNum = randomNum = Math.floor(Math.random() * 20 + 1);

  // Reset the dialogs messages.
  message.textContent = 'Start guessing...';
  score.textContent = numOfTrials;
  number.textContent = '?';
  guessingNum = '';

  // Reset the backgroud color
  document.querySelector('body').style.backgroundColor = '#222';
});

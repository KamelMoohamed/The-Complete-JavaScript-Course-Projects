'use strict';

// Players variables
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Buttons Fields Variables
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');

// Player 0 Score Variables
let player0Score = 0;
let plater0FinalScore = 0;
const player0Name = document.querySelector('#name--0');
const player0TotalScore = document.querySelector('#score--0');
const player0CurrentScore = document.querySelector('#current--0');

// Player 1 Score Variables
let player1Score = 0;
let plater1FinalScore = 0;
const player1Name = document.querySelector('#name--1');
const player1TotalScore = document.querySelector('#score--1');
const player1CurrentScore = document.querySelector('#current--1');

// Variable to generate a random number
let randNum;
let playerTurn = true;

const Roll = function (playerTurn, value) {
  if (playerTurn) {
    if (value != 1) {
      player0Score += randNum;
      player0CurrentScore.textContent = player0Score;
    } else {
      player0Score = 0;
      player0CurrentScore.textContent = player0Score;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  } else {
    if (value != 1) {
      player1Score += randNum;
      player1CurrentScore.textContent = player1Score;
    } else {
      player1Score = 0;
      player1CurrentScore.textContent = player1Score;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
};

btnRoll.addEventListener('click', function () {
  randNum = Math.floor(Math.random() * 6 + 1);
  diceImage.src = `dice-${randNum}.png`;
  diceImage.classList.remove('hidden');
  if (randNum != 1) {
    Roll(playerTurn, randNum);
  } else {
    Roll(playerTurn, randNum);
    playerTurn = !playerTurn;
  }
});

btnHold.addEventListener('click', function () {
  if (playerTurn) {
    plater0FinalScore += player0Score;
    player0TotalScore.textContent = plater0FinalScore;
    player0Score = 0;
    player0CurrentScore.textContent = 0;
  } else {
    plater1FinalScore += player1Score;
    player1TotalScore.textContent = plater1FinalScore;
    player1Score = 0;
    player1CurrentScore.textContent = 0;
  }
  playerTurn = !playerTurn;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
});

btnNew.addEventListener('click', function () {
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  player0TotalScore.textContent = 0;
  player1TotalScore.textContent = 0;
});

'use strict';

// console.log( document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);

let secertNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secertNumber);

let score = 20;
let highScore = 0;

  let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);


  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  } else if (guess === secertNumber) {
    document.querySelector('.number').textContent = secertNumber;
    // document.querySelector('.message').textContent = '🎇 correct Number';
    displayMessage('🎇 correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //   else if (guess !== secertNumber) {
    //      if (score > 1) {
    //     document.querySelector('.message').textContent =
    //     guess > secertNumber ? '📈 Too high' : '📉 Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥You lose the Game ';

    //   }
    // }
  } else if (guess > secertNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '📈 Too high';
      displayMessage('📈 Too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lose the Game ';
      displayMessage('💥You lose the Game ');
    }
  } else if (guess < secertNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '📉 Too Low';
      displayMessage('📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lose the Game ';
      displayMessage('💥You lose the Game ');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

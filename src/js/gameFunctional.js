import { keyboard } from './keyboard.js';
import { disableButtons } from './buttonsState.js';
let saveSequence;

export function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

export function whatLevel() {
  const levelBtnsList = document.querySelectorAll('.level-btn');
  let level = 'Easy';
  levelBtnsList.forEach((btn) => {
    if (btn.classList.value.includes('active')) {
      level = btn.innerText;
    }
  });
  return level;
}

export function whatRound() {
  const levelRound = document.querySelector('.level-round');
  const roundNumber = levelRound.innerText.replace(/\D/g, '').split('')[0];
  return +roundNumber;
}

export function ChangeRound(roundNumber) {
  const levelRound = document.querySelector('.level-round');
  const nextRound = roundNumber < 5 ? roundNumber : 1;

  levelRound.innerText = `Round ${nextRound}/5`;
}

export function startGame() {
  cleanEnterInput();
  disableButtons('game-btn', true);
  disableButtons('keyboard-btn', true);
  const level = whatLevel();
  const round = whatRound();
  const sequence = getSequence(level, round);
  console.log(sequence);
  saveSequence = sequence;
  simonSaysSymbols(sequence);
  setTimeout(function () {
    disableButtons('game-btn', false);
    disableButtons('keyboard-btn', false);
  }, 3000);
}

export function getSequence(level, round) {
  const roundSymbols = round * 2;
  let result = '';
  if (level === 'Easy') {
    for (let i = 0; i < roundSymbols; i += 1) {
      const randomNumber = getRandomNumber(0, 9);
      result += keyboard[0][randomNumber];
    }
  }
  if (level === 'Medium') {
    for (let i = 0; i < roundSymbols; i += 1) {
      const randomNumber = getRandomNumber(0, 25);
      result += keyboard[1][randomNumber];
    }
  }
  if (level === 'Hard') {
    for (let i = 0; i < roundSymbols; i += 1) {
      const coin = Math.random();
      if (coin > 0.5) {
        const randomNumber = getRandomNumber(0, 9);
        result += keyboard[0][randomNumber];
      } else {
        const randomNumber = getRandomNumber(0, 25);
        result += keyboard[1][randomNumber];
      }
    }
  }
  return result;
}

export function simonSaysSymbols(string) {
  for (let i = 0; i < string.length; i += 1) {
    const symbol = string[i];
    setTimeout(showHints, 500, symbol);
  }
}

function showHints(symbol) {
  const keyboardContainer = document.querySelector(
    '.game-container__keyboard-container'
  );
  const keyboardBtnSList = keyboardContainer.querySelectorAll('.btn');

  keyboardBtnSList.forEach((btn) => {
    if (btn.innerHTML.toLocaleLowerCase() === symbol) {
      setTimeout(function () {
        btn.classList.add('active');
      }, 0);
      //btn.classList.add('active');
      setTimeout(function () {
        btn.classList.remove('active');
      }, 500);
    }
    // нужно будет доделать интервал между добавлением и удалением
  });
}

export function cleanEnterInput() {
  const input = document.querySelector('.game-container__input');
  input.value = '';
}

export function repeatSequence() {
  cleanEnterInput();
  disableButtons('keyboard-btn', true);
  simonSaysSymbols(saveSequence);
  setTimeout(function () {
    disableButtons('keyboard-btn', false);
  }, 3000);
}

export function writeSymbolToEnterInput(symbol) {
  const input = document.querySelector('.game-container__input');
  input.value += symbol;
}

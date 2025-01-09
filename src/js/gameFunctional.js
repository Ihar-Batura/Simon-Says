import { keyboard } from './keyboard.js';
import { disableButtons, changeButtonValue } from './buttonsState.js';
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
  const nextRound = roundNumber < 6 ? roundNumber : 1;

  levelRound.innerText = `Round ${nextRound}/5`;
}

export function startGame() {
  cleanEnterInput();
  showGameButtons();
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
  input.classList.remove('error');
  input.classList.remove('right');
  input.value = '';
}

export function showTextInInput(text) {
  const input = document.querySelector('.game-container__input');
  input.value = `${text}`;
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
  input.value += symbol.toUpperCase();
  checkInputValue();
}

export function checkInputValue() {
  const input = document.querySelector('.game-container__input');
  const enterValueLength = input.value.length;
  const sequenceLength = saveSequence.length;
  const enteredValue = input.value
    .split('')
    .map((el) => el.toLowerCase())
    .join('');
  if (sequenceLength >= enterValueLength) {
    if (enteredValue !== saveSequence.substring(0, enterValueLength)) {
      input.classList.add('error');
      disableButtons('keyboard-btn', true);
      showTextInInput('Mistake :(');
    }
  }
  if (sequenceLength === enterValueLength && enteredValue === saveSequence) {
    const roundNumber = whatRound();
    if (roundNumber < 5) {
      input.classList.add('right');
      disableButtons('keyboard-btn', true);
      showTextInInput(`It's all correct :)`);
      changeButtonValue('repeat-next__btn', 'Next');
      disableButtons('repeat-next__btn', false);
    }
    if (roundNumber === 5) {
      input.classList.add('right');
      disableButtons('keyboard-btn', true);
      showTextInInput(`The level passed!`);
      showElement('level-round', 'hide');
      showElement('repeat-next__btn', 'hide');
    }
  }
}

export function checkKeyboardSymbol(symbol) {
  let isBtnDisabled = true;
  const keyboardsBtnsList = document.querySelectorAll('.keyboard-btn');
  keyboardsBtnsList.forEach((btn) => {
    if (
      btn.innerHTML.toLowerCase() === symbol &&
      !btn.hasAttribute('disabled')
    ) {
      isBtnDisabled = false;
    }
  });

  const numberKeyboard = document.querySelector('.keyboard-number__container');
  const letterKeyboard = document.querySelector('.keyboard-letters__container');
  const isNumberKeyboardHide = numberKeyboard.classList.value.includes('hide');
  const isLetterKeyboardHide = letterKeyboard.classList.value.includes('hide');

  if (isNumberKeyboardHide && !isBtnDisabled) {
    if (keyboard[1].includes(symbol)) {
      writeSymbolToEnterInput(symbol);
    }
  }
  if (isLetterKeyboardHide && !isBtnDisabled) {
    if (keyboard[0].includes(symbol)) {
      writeSymbolToEnterInput(symbol);
    }
  }
  if (!isNumberKeyboardHide && !isLetterKeyboardHide && !isBtnDisabled) {
    if (keyboard[0].includes(symbol) || keyboard[1].includes(symbol)) {
      writeSymbolToEnterInput(symbol);
    }
  }
}

document.addEventListener('keyup', (event) => {
  checkKeyboardSymbol(event.key.toLowerCase());
  highlightBtn(event.key.toUpperCase());
});

export function showGameButtons() {
  const gameBtnsList = document.querySelectorAll('.game-btn');
  gameBtnsList.forEach((btn) => {
    btn.classList.remove('hide');
  });
}

export function cleanMainContainer() {
  const main = document.querySelector('.main');
  main.innerHTML = '';
}

export function showElement(className, action) {
  const element = document.querySelector(`.${className}`);
  if (action === 'show') {
    element.classList.remove('hide');
  }
  if (action === 'hide') {
    element.classList.add('hide');
  }
}

export function highlightBtn(letter) {
  const keyboardBtnList = document.querySelectorAll('.keyboard-btn');
  keyboardBtnList.forEach((btn) => {
    if (btn.innerHTML === letter) {
      btn.classList.add('active');
      setTimeout(function () {
        btn.classList.remove('active');
      }, 300);
    }
  });
}

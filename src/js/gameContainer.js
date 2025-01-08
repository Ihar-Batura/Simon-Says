import createElement from './createElement.js';
import { keyboard } from './keyboard.js';
import { writeSymbolToEnterInput } from './gameFunctional.js';

function createGameContainer() {
  const gameContainer = createElement({
    tag: 'div',
    classes: ['main_game-container'],
  });
  const gameInput = createElement({
    tag: 'input',
    classes: ['game-container__input'],
    parent: gameContainer,
  });
  gameInput.setAttribute('readonly', true);

  const keyboardContainer = createElement({
    tag: 'div',
    classes: ['game-container__keyboard-container'],
    parent: gameContainer,
  });
  const keyboardNumberContainer = createElement({
    tag: 'div',
    classes: ['keyboard-number__container'],
    parent: keyboardContainer,
  });
  for (let i = 0; i < keyboard[0].length; i += 1) {
    const numberBtn = createElement({
      tag: 'button',
      classes: ['btn', 'keyboard-btn', 'keyboard-btn__number'],
      text: keyboard[0][i],
      disabled: 'true',
      parent: keyboardNumberContainer,
    });
    numberBtn.addEventListener('click', (e) => {
      const keyboardSymbol = e.target.innerText;
      writeSymbolToEnterInput(keyboardSymbol);
    });
  }

  const keyboardLettersContainer = createElement({
    tag: 'div',
    classes: ['keyboard-letters__container', 'hide'],
    parent: keyboardContainer,
  });
  for (let i = 0; i < keyboard[1].length; i += 1) {
    const letterBtn = createElement({
      tag: 'button',
      classes: ['btn', 'keyboard-btn', 'keyboard-btn__letter'],
      text: keyboard[1][i].toUpperCase(),
      disabled: 'true',
      parent: keyboardLettersContainer,
    });
    letterBtn.addEventListener('click', (e) => {
      const symbol = e.target.innerText;
      writeSymbolToEnterInput(symbol);
    });
  }

  return gameContainer;
}

export default createGameContainer;

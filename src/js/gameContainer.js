import createElement from './createElement.js';
import { keyboard } from './keyboard.js';

function createGameContainer() {
  const gameContainer = createElement({
    tag: 'div',
    classes: ['main_game-container'],
  });
  createElement({
    tag: 'input',
    classes: ['game-container__input'],
    parent: gameContainer,
  });
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
    createElement({
      tag: 'button',
      classes: ['btn', 'keyboard-btn', 'keyboard-btn__number'],
      text: keyboard[0][i],
      parent: keyboardNumberContainer,
    });
  }

  const keyboardLettersContainer = createElement({
    tag: 'div',
    classes: ['keyboard-letters__container'],
    parent: keyboardContainer,
  });
  for (let i = 0; i < keyboard[1].length; i += 1) {
    createElement({
      tag: 'button',
      classes: ['btn', 'keyboard-btn', 'keyboard-btn__letter'],
      text: keyboard[1][i],
      parent: keyboardLettersContainer,
    });
  }

  return gameContainer;
}

export default createGameContainer;

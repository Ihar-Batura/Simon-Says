import createElement from './createElement.js';
import { startGame, repeatSequence } from './gameFunctional.js';
import { disableOneButton } from './buttonsState.js';

function createGameBtns(arr) {
  const gameBtnsContainer = createElement({
    tag: 'div',
    classes: ['main-container__game-btns'],
  });
  for (let i = 0; i < arr.length; i += 1) {
    const gameBtn = createElement({
      tag: 'button',
      classes: ['btn', 'game-btn'],
      text: `${arr[i]}`,
      disabled: 'true',
      parent: gameBtnsContainer,
    });
    if (i === 0) {
      gameBtn.classList.add('repeat-next__btn');
      gameBtn.addEventListener('click', function () {
        repeatSequence();
        disableOneButton('repeat-next__btn', true);
      });
    }
    if (i === 1) {
      gameBtn.classList.add('new-game__btn');
      gameBtn.addEventListener('click', startGame);
    }
  }

  return gameBtnsContainer;
}

export default createGameBtns;

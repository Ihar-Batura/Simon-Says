import createElement from './createElement.js';
import {
  startGame,
  repeatSequence,
  cleanMainContainer,
  whatLevel,
  whatRound,
  ChangeRound,
} from './gameFunctional.js';
import { disableOneButton, changeButtonValue } from './buttonsState.js';
import { createMainContent } from './main.js';
import chooseLevel from './chooseLevel.js';

function createGameBtns(arr) {
  const gameBtnsContainer = createElement({
    tag: 'div',
    classes: ['main-container__game-btns'],
  });
  for (let i = 0; i < arr.length; i += 1) {
    const gameBtn = createElement({
      tag: 'button',
      classes: ['btn', 'game-btn', 'hide'],
      text: `${arr[i]}`,
      parent: gameBtnsContainer,
    });
    if (i === 0) {
      gameBtn.classList.add('repeat-next__btn');
      gameBtn.addEventListener('click', function () {
        const btnValue = document.querySelector('.repeat-next__btn').innerHTML;
        if (btnValue === 'Repeat the sequence') {
          repeatSequence();
          disableOneButton('repeat-next__btn', true);
          disableOneButton('new-game__btn', true);
        }
        if (btnValue === 'Next') {
          const round = whatRound();
          ChangeRound(round + 1);
          changeButtonValue('repeat-next__btn', 'Repeat the sequence');
          startGame();
        }
      });
    }
    if (i === 1) {
      gameBtn.classList.add('new-game__btn');
      gameBtn.addEventListener('click', function () {
        const level = whatLevel();
        cleanMainContainer();
        createMainContent(level);
        chooseLevel(level);
      });
    }
  }

  return gameBtnsContainer;
}

export default createGameBtns;

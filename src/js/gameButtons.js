import createElement from './createElement.js';

function createGameBtns(arr) {
  const gameBtnsContainer = createElement({
    tag: 'div',
    classes: ['main-container__game-btns'],
  });
  for (let i = 0; i < arr.length; i += 1) {
    createElement({
      tag: 'button',
      classes: ['btn', 'game-btn'],
      text: `${arr[i]}`,
      parent: gameBtnsContainer,
    });
  }

  return gameBtnsContainer;
}

export default createGameBtns;

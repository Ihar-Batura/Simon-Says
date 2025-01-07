import createElement from './createElement.js';

function createLevelButtons(arr) {
  const levelBtnsContainer = createElement({
    tag: 'div',
    classes: ['main-btns__level-container'],
  });
  for (let i = 0; i < arr.length; i += 1) {
    createElement({
      tag: 'button',
      classes: ['btn', 'level-btn'],
      text: `${arr[i]}`,
      parent: levelBtnsContainer,
    });
  }

  return levelBtnsContainer;
}

export default createLevelButtons;

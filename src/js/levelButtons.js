import createElement from './createElement.js';

function createLevelButtons(arr) {
  const levelBtnsContainer = createElement({
    tag: 'div',
    classes: ['main-btns__level-container'],
  });
  for (let i = 0; i < arr.length; i += 1) {
    const btn = createElement({
      tag: 'button',
      classes: ['btn', 'level-btn'],
      text: `${arr[i]}`,
      parent: levelBtnsContainer,
    });

    if (arr[i] === 'Easy') {
      btn.classList.add('active');
    }
  }

  createElement({
    tag: 'p',
    classes: ['level-round'],
    text: 'Round 1/5',
    parent: levelBtnsContainer,
  });

  return levelBtnsContainer;
}

export default createLevelButtons;

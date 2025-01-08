import createElement from './createElement.js';
import createLevelButtons from './levelButtons.js';
import createGameBtns from './gameButtons.js';
import createGameContainer from './gameContainer.js';
import { disableLevelButtons, showBtnStart } from './buttonsState.js';
import { startGame, showElement } from './gameFunctional.js';

const body = document.querySelector('body');

const header = createElement({
  tag: 'header',
  classes: ['header'],
});

const logo = createElement({
  tag: 'h1',
  classes: ['header-logo'],
  text: 'Simon Says',
  parent: header,
});
body.append(header);

createElement({ tag: 'main', classes: ['main'], parent: body });

export function createMainContent(startLevel) {
  const main = document.querySelector('.main');
  const mainLevelBtns = createLevelButtons(
    ['Easy', 'Medium', 'Hard'],
    startLevel
  );
  const mainGameBtns = createGameBtns(['Repeat the sequence', 'New game']);
  const mainGameContainer = createGameContainer();
  const btnStart = createElement({
    tag: 'button',
    classes: ['btn', 'start-btn'],
    text: 'Start',
  });

  btnStart.addEventListener('click', function () {
    disableLevelButtons(true);
    startGame();
    showBtnStart('hide');
    showElement('level-round', 'show');
  });

  main.append(mainLevelBtns, mainGameBtns, mainGameContainer, btnStart);
}
createMainContent('Easy');

const footer = createElement({
  tag: 'footer',
  classes: ['footer'],
});

const footerLink = createElement({
  tag: 'a',
  classes: ['footer-link'],
  text: 'Ihar Batura',
  href: 'https://github.com/Ihar-Batura',
  target: '_blank',
  parent: footer,
});

body.append(footer);

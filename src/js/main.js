import createElement from './createElement.js';
import createLevelButtons from './levelButtons.js';
import createGameBtns from './gameButtons.js';
import createGameContainer from './gameContainer.js';

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

const main = createElement({ tag: 'main', classes: ['main'] });
const mainLevelBtns = createLevelButtons(['Easy', 'Medium', 'Hard']);
const mainGameBtns = createGameBtns(['Repeat the sequence', 'New game']);
const mainGameContainer = createGameContainer();

main.append(mainLevelBtns, mainGameBtns, mainGameContainer);

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

body.append(header, main, footer);

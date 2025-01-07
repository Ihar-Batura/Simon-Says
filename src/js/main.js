import createElement from './createElement.js';

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

body.append(header, footer);

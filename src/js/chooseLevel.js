function chooseLevel(level) {
  const listLevelBtns = document.querySelectorAll('.level-btn');
  listLevelBtns.forEach((btn) => {
    if (btn.innerText === level) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const numberKeyboard = document.querySelector('.keyboard-number__container');
  const lettersKeyboard = document.querySelector(
    '.keyboard-letters__container'
  );

  if (level === 'Easy') {
    lettersKeyboard.classList.add('hide');
    numberKeyboard.classList.remove('hide');
  }
  if (level === 'Medium') {
    numberKeyboard.classList.add('hide');
    lettersKeyboard.classList.remove('hide');
  }
  if (level === 'Hard') {
    numberKeyboard.classList.remove('hide');
    lettersKeyboard.classList.remove('hide');
  }
}

export default chooseLevel;

export function disableLevelButtons(action) {
  const btnsList = document.querySelectorAll('.level-btn');

  btnsList.forEach((btn) => {
    if (action === true) {
      btn.setAttribute('disabled', 'true');
    } else {
      btn.setAttribute('disabled', '');
    }
  });
}

export function disableButton(className, action) {
  const btn = document.querySelector(`.${className}`);

  if (action === true) {
    btn.setAttribute('disabled', 'true');
  } else {
    btn.setAttribute('disabled', '');
  }
}

export function showBtnStart(action) {
  const btn = document.querySelector('.start-btn');
  if (action === 'hide') {
    btn.classList.add('hide');
  } else {
    btn.classList.remove('hide');
  }
}

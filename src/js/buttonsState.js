export function disableButtons(className, action) {
  const btnsList = document.querySelectorAll(`.${className}`);

  btnsList.forEach((btn) => {
    if (action === true) {
      btn.setAttribute('disabled', 'true');
    } else {
      btn.removeAttribute('disabled');
    }
  });
}

export function disableLevelButtons(action) {
  const btnsList = document.querySelectorAll('.level-btn');

  btnsList.forEach((btn) => {
    if (action === true) {
      btn.setAttribute('disabled', 'true');
    } else {
      btn.removeAttribute('disabled');
    }
  });
}

export function disableOneButton(className, action) {
  const btn = document.querySelector(`.${className}`);

  if (action === true) {
    btn.setAttribute('disabled', 'true');
  } else {
    btn.removeAttribute('disabled');
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

export function changeButtonValue(className, value) {
  const btn = document.querySelector(`.${className}`);
  btn.innerHTML = value;
}

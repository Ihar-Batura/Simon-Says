export function disabledAllButtons(action) {
  const btnsList = document.querySelectorAll('.btn');

  btnsList.forEach((btn) => {
    if (action === true) {
      btn.setAttribute('disabled', 'true');
    } else {
      btn.setAttribute('disabled', '');
    }
  });
}

export function disabledOneButton(className, action) {
  const btn = document.querySelector(`.${className}`);

  if (action === true) {
    btn.setAttribute('disabled', 'true');
  } else {
    btn.setAttribute('disabled', '');
  }
}

export function whatLevel() {
  const levelBtnsList = document.querySelectorAll('.level-btn');
  levelBtnsList.forEach((btn) => {
    if (btn.classList.value.includes('active')) {
      console.log(btn.innerText);
    }
  });
}

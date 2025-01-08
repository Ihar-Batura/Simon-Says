export function whatRound() {
  const levelRound = document.querySelector('.level-round');
  const roundNumber = levelRound.innerText.replace(/\D/g, '').split('')[0];
  return roundNumber;
}

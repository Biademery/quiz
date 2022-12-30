const correctAnswers = [
  'question1d',
  'question2d',
  'question3b',
  'question4d',
  'question5e',
  'question6c',
  'question7c',
  'question8a',
  'question9c',
  'question10d',
];

function checkAnswers(event) {
  event.preventDefault();

  let i;

  for (i = 0; i < 10; i++) {
    const isCorrect = document.getElementById(correctAnswers[i]).checked;
    const currentParagraph = document.getElementsByClassName('result')[i];

    if (isCorrect) {
      currentParagraph.textContent = 'Correct!';
    } else {
      currentParagraph.textContent = 'Wrong!';
    }
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', checkAnswers);

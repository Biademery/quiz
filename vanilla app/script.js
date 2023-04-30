const correctAnswers = ['D', 'D', 'B', 'D', 'E', 'C', 'C', 'A', 'C', 'D'];

const form = document.querySelector('form');
const finalResult = document.querySelector('.result');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    form.question1.value,
    form.question2.value,
    form.question3.value,
    form.question4.value,
    form.question5.value,
    form.question6.value,
    form.question7.value,
    form.question8.value,
    form.question9.value,
    form.question10.value,
  ];
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 10;
    }
  });

  scrollTo(0, 0);

  finalResult.querySelector('span').textContent = `${score}%`;
  finalResult.classList.remove('d-none');

  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalResult.querySelector('span').textContent = `${counter}%`;
    counter++;
  }, 10);
});

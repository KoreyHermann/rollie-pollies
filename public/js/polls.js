const form = document.querySelector('.poll-form');
const questionInput = document.querySelector('#question');
const answer1Input = document.querySelector('#answer1');
const answer2Input = document.querySelector('#answer2');
const card = document.querySelector('#poll-card');
const cardQuestion = document.querySelector('#card-question');
const cardAnswer1 = document.querySelector('#card-answer1');
const cardAnswer2 = document.querySelector('#card-answer2');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = questionInput.value;
  const answer1 = answer1Input.value;
  const answer2 = answer2Input.value;

  cardQuestion.textContent = question;
  cardAnswer1.textContent = answer1;
  cardAnswer2.textContent = answer2;
  card.style.display = 'block';
});
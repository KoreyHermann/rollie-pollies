const createpoll = document.getElementById('addPollbutton');
const pollList = document.getElementById('poll-list');

createpoll.addEventListener('click', function(event){

  event.preventDefault();

  const inputquestion = document.getElementById('question');
  const inputanswer1 = document.getElementById('answer1');
  const inputanswer2 = document.getElementById('answer2');

  const newPollCard = document.createElement('div');
  newPollCard.classList.add('poll-card');

  const pollquestion = document.createElement('h2');
  pollquestion.id = 'poll-question';
  pollquestion.innerText = inputquestion.value;
  newPollCard.appendChild(pollquestion);

  const pollanswers = document.createElement('div');
  pollanswers.id = 'poll-answers';

  const answer1Paragraph = document.createElement('p');
  answer1Paragraph.innerText = inputanswer1.value;
  pollanswers.appendChild(answer1Paragraph);

  const answer2Paragraph = document.createElement('p');
  answer2Paragraph.innerText = inputanswer2.value;
  pollanswers.appendChild(answer2Paragraph);

  newPollCard.appendChild(pollanswers);

  newPollCard.style.display = 'block';

  inputquestion.value = '';
  inputanswer1.value = '';
  inputanswer2.value = '';

  const pollListItem = document.createElement('li');
  pollListItem.appendChild(newPollCard);

  pollList.insertBefore(pollListItem, pollList.firstChild);
});
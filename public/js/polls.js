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
  
  const answer1Button = document.createElement('button');
  answer1Button.innerText = 'Vote';
  answer1Button.dataset.votes = '0';
  
  answer1Button.addEventListener('click', function() {
    const currentVotes = parseInt(answer1Button.dataset.votes);
    answer1Button.dataset.votes = currentVotes + 1;
    answer1Button.innerText = 'Vote (' + (currentVotes + 1) + ')';
  });
  
  answer1Paragraph.appendChild(answer1Button);
  
  pollanswers.appendChild(answer1Paragraph);

  const answer2Paragraph = document.createElement('p');
  answer2Paragraph.innerText = inputanswer2.value;
  
  const answer2Button = document.createElement('button');
  answer2Button.innerText = 'Vote';
  answer2Button.dataset.votes = '0';
  
  answer2Button.addEventListener('click', function() {
    const currentVotes = parseInt(answer2Button.dataset.votes);
    answer2Button.dataset.votes = currentVotes + 1;
    answer2Button.innerText = 'Vote (' + (currentVotes + 1) + ')';
  });
  
  answer2Paragraph.appendChild(answer2Button);
  
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


(function () {
  const poll = document.querySelector('.poll');
  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');

  // Poll loading
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
  xhr.send();

  xhr.addEventListener('load', function (evt) {
    if (evt.target.status === 200) {
      pollTitle.innerHTML = `${JSON.parse(xhr.response).data.title}`;

      poll.dataset.pollId = JSON.parse(xhr.response).id;

      JSON.parse(xhr.response).data.answers.forEach((element, idx) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.dataset.answerIndex = idx;
        answerButton.innerHTML = element;
        pollAnswers.appendChild(answerButton);
      });
    } else {
      console.log('Ошибка сервера');
    }
  });

  const voteResultRequest = new XMLHttpRequest();
  voteResultRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
  voteResultRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  poll.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('poll__answer')) {
      alert('Ваш голос защитан');
      voteResultRequest.send(`vote=${poll.dataset.pollId}&answer${evt.target.dataset.answerIndex}`);
    }
  });

  //Stat request
  voteResultRequest.addEventListener('load', function (evt) {
    if (evt.target.status === 200) {
      pollAnswers.innerHTML = "";

      const stat = JSON.parse(voteResultRequest.response).stat;
      let votesTotal = 0;

      stat.forEach(element => votesTotal += Number(element.votes));
      stat.forEach(element => {
        const votePercent = (Number(element.votes) / votesTotal * 100).toFixed(2);
        const voteStat = document.createElement('p');
        voteStat.innerHTML = `${element.answer}: <strong>${votePercent}%</strong>`;
        pollAnswers.appendChild(voteStat);
      });
    } else {
      console.log('Ошибка сервера');
    }
  });

})();
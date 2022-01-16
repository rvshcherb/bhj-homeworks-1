//Easy version

// const timer = document.getElementById('timer');

// const countDown = function() {
//   let timerValue = timer.textContent;
//   if(timerValue > 0) {
//     timerValue -= 1;
//     timer.textContent = timerValue;
//   } else {
//     clearInterval(timerId);
//     alert('Вы победили в конкурсе!');
//   }
// };

// const timerId = setInterval(countDown, 1000);


//Hard version
const timer = function (hr, min, sec) {
  const timerElement = document.getElementById('timer');
  const initialTime = Date.now();
  const durationInSec = hr * 3600 + min * 60 + sec;
  let differenceInSec;

  const countDown = function () {
    differenceInSec = durationInSec - (Math.round((Date.now() - initialTime) / 1000));

    let hours = Math.floor(differenceInSec / 3600);
    let minutes = Math.floor((differenceInSec - hours * 3600) / 60);
    let seconds = Math.floor((differenceInSec - hours * 3600) % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeToShow = hours + ':' + minutes + ':' + seconds;

    if (differenceInSec >= 0) {
      timerElement.textContent = timeToShow;
      console.log(timeToShow);
    } else {
      clearInterval(timerId);
      alert('Вы победили в конкурсе!');
      // window.location = 'https://u.netology.ngcdn.ru/backend/uploads/lms/attachments/files/data/33287/BHJ-26__%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8_JavaScript_%D0%B2_%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5.pdf';
    }
  };
  countDown();
  const timerId = setInterval(countDown, 1000);
};

timer(0, 0, 5);


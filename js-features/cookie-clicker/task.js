const cookieClicker = function() {
  let prevClickTime = Date.now(),
    newClickTime,
    clickSpeed = 0,
    counter = 0;

  const cookie = document.getElementById('cookie');
  const clickerCounter = document.getElementById('clicker__counter');
  const averageSpeed = document.createElement('p');
  averageSpeed.textContent = 'Скорость клика: 0';
  document.querySelector('.clicker__status').after(averageSpeed);

  cookie.onclick = function() {
    counter++;
    clickerCounter.textContent = counter;

    newClickTime = Date.now();
    clickSpeed = (1 / ((newClickTime - prevClickTime) / 1000)).toFixed(2);
    prevClickTime = newClickTime;
    averageSpeed.textContent = `Скорость клика: ${clickSpeed}`;

    if(cookie.width === 200) {
      cookie.width = 300;
    } else {
      cookie.width = 200;
    }
  };
};

cookieClicker();



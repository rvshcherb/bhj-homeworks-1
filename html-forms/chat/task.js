(function () {
  const chatWidget = document.querySelector('.chat-widget__side-text');
  const messageBox = document.querySelector('.chat-widget__messages');
  const inputBox = document.querySelector('.chat-widget__input');

  let timer;

  const replies = [
    'разговор со мной — услуга платная',
    'не балуйся',
    'извини, я занят',
    'давай поговорим позже',
    'кажется, у меня молоко на плите сейчас убежит...',
    'печально я гляжу на наше поколение...',
    'не мешай, я думаю',
    'подожди, я в бою',
    'меня нет, я форум читаю!'
  ];

  const reply = function () {
    messageBox.innerHTML += `
    <div class="message">
      <div class="message__time">
      ${new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      })}
      </div>
      <div class="message__text">
        ${replies[Math.floor(Math.random() * (replies.length))]}
      </div>
    </div>`;
    messageBox.lastElementChild.scrollIntoView(true);
  };


  chatWidget.addEventListener('click', function () {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    timer = setInterval(reply, 30000);
  });

  inputBox.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter' && inputBox.value.length > 0) {

      clearInterval(timer);

      messageBox.innerHTML += `
        <div class="message message_client">
          <div class="message__time">
          ${new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          </div>
          <div class="message__text">
            ${inputBox.value}
          </div>
        </div>`;

      inputBox.value = "";
      messageBox.lastElementChild.scrollIntoView(true);
      setTimeout(reply, 2000);
    }
  });
})();



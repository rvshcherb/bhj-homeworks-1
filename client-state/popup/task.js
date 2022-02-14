const popUp = function () {
  const modal = document.getElementById('subscribe-modal');
  const closeBtn = document.querySelector('.modal__close');

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  if(!getCookie('status')) {
    modal.classList.toggle('modal_active');
  }

  closeBtn.addEventListener('click', function(evt) {
    document.cookie = encodeURIComponent('status') + '=' + encodeURIComponent('informed'); 
    evt.target.closest('.modal').classList.remove('modal_active');
  });
};

window.addEventListener('DOMContentLoaded', popUp);
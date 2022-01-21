(function() {

  const modalMain = document.getElementById('modal_main');
  window.onload = () => modalMain.classList.toggle('modal_active');
  
  const closeBtnList = document.querySelectorAll('.modal__close');
  const showSuccessBtn = document.querySelector('.show-success');

  const modalClose = function(event) {
    event.target.closest('.modal').classList.remove('modal_active');
  };

  closeBtnList.forEach(btn => btn.addEventListener('click', modalClose));

  showSuccessBtn.addEventListener('click', () => document.getElementById('modal_success').classList.toggle('modal_active'));
})();


const authorization = function () {
  const userID = document.getElementById('user_id');
  const signinBlock = document.getElementById('signin');
  const welcomeBlock = document.getElementById('welcome');
  const form = document.getElementById('signin__form');
  const submitBtn = document.getElementById('signin__btn');
  const logoutBtn = document.getElementById('logout');

  let id = localStorage.id;

  const logout = function () {
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        localStorage.clear();
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
        location.reload();
      });
    }
  }

  const welcomeUser = function () {
    userID.outerText = id;
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    logout();
  };

  const authorize = function () {
    xhr = new XMLHttpRequest();
    submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
      const formData = new FormData(form);
      xhr.send(formData);
      form.reset();
    });

    xhr.addEventListener('load', function () {
      if (JSON.parse(xhr.response).success) {
        id = JSON.parse(xhr.response).user_id;
        localStorage.setItem('id', id)
        welcomeUser();
      } else {
        alert('Не верный логин/пароль');
      }
    })
  };

  if (localStorage.id) {
    welcomeUser();
  } else {
    authorize();
  }
};

window.addEventListener('DOMContentLoaded', authorization);
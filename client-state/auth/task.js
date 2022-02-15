class Authorization {
  constructor() {
    this.userID = document.getElementById('user_id');
    this.signinBlock = document.getElementById('signin');
    this.welcomeBlock = document.getElementById('welcome');
    this.form = document.getElementById('signin__form');
    this.submitBtn = document.getElementById('signin__btn');
    this.logoutBtn = document.getElementById('logout');
    this.id = localStorage.id;
  }

  logout() {
    if (this.logoutBtn) {
      this.logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        this.signinBlock.classList.add('signin_active');
        this.welcomeBlock.classList.remove('welcome_active');
        location.reload();
      });
    }
  }

  welcomeUser() {
    this.userID.outerText = this.id;
    this.signinBlock.classList.remove('signin_active');
    this.welcomeBlock.classList.add('welcome_active');
    this.logout();
  };

  authorize() {
    const xhr = new XMLHttpRequest();
    this.submitBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
      const formData = new FormData(this.form);
      xhr.send(formData);
      this.form.reset();
    });

    xhr.addEventListener('load', () => {
      if (JSON.parse(xhr.response).success) {
        this.id = JSON.parse(xhr.response).user_id;
        localStorage.setItem('id', this.id)
        this.welcomeUser();
      } else {
        alert('Не верный логин/пароль');
      }
    })
  };
};

const launchAuth = function() {
  const authorization = new Authorization();
  if (localStorage.id) {
    authorization.welcomeUser();
  } else {
    authorization.authorize();    
  }
};

window.addEventListener('DOMContentLoaded', launchAuth);
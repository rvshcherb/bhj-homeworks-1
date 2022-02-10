(function () {
    const progressBar = document.getElementById('progress');
    const form = document.getElementById('form');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.setRequestHeader('Content-Type', 'form/multipart');

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(form);
      xhr.send(formData);
    });

    xhr.upload.addEventListener('progress', function (evt) {
      progressBar.value = (evt.loaded / evt.total).toFixed(1);
    });
  }
)();
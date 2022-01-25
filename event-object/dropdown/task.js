(function(){
  const dropDownBtn = document.querySelector('.dropdown__value');
  const dropDownList = document.querySelector('.dropdown__list')
  const dropDownLinks = document.querySelectorAll('.dropdown__link');

  const toggleDropDown = function(){
    dropDownList.classList.toggle('dropdown__list_active');
  };

  const changeValue = function(event) {
    event.preventDefault();
    dropDownBtn.textContent = this.textContent;
    dropDownList.classList.remove('dropdown__list_active');
  };

  dropDownBtn.addEventListener('click', toggleDropDown);
  dropDownLinks.forEach(link => link.addEventListener('click', changeValue));
})();

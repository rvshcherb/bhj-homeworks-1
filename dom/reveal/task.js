(function() {
  const elementsToShow = document.querySelectorAll('.reveal');

  const checkIfVisible = function() {
    elementsToShow.forEach(element => {
      let elemDimension = element.getBoundingClientRect();
      if(window.innerHeight - elemDimension.top > 0 && elemDimension.bottom > 0) {
        if(!element.classList.contains('reveal_active')) element.classList.add('reveal_active');
      } else {
        if(element.classList.contains('reveal_active')) element.classList.remove('reveal_active');
      }
    });
  };

  window.addEventListener('scroll', checkIfVisible);
})();
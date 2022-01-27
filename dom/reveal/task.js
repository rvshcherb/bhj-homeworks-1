(function() {
  const elementsToShow = document.querySelectorAll('.reveal');

  const checkIfVisible = function() {
    // elementsToShow.forEach(element => console.log(element.getBoundingClientRect()));
    
    elementsToShow.forEach((element, index) => {
      let elemDimension = element.getBoundingClientRect();
      //console.log(elemDimension);
      if(window.innerHeight - elemDimension.top > 0 && elemDimension.bottom > 0) {
        if(!element.classList.contains('reveal_active')) element.classList.add('reveal_active');
        console.log(`element ${index} to show`);
      } else {
        if(element.classList.contains('reveal_active')) element.classList.remove('reveal_active');
        console.log(`element ${index} to hide`);
      }
    });


    //console.log(window.innerHeight);
  };
  window.addEventListener('scroll', checkIfVisible);

  //elementsToShow.forEach(element => element.addEventListener('scroll', checkIfVisible));
})();
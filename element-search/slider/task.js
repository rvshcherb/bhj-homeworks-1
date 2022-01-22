(function () {

  const sliderItems = document.querySelectorAll('.slider__item');
  const sliderDots = document.querySelectorAll('.slider__dot');

  const nextBtn = document.querySelector('.slider__arrow_next');
  const prevBtn = document.querySelector('.slider__arrow_prev');

  
  const changeSlide = function (index) {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    sliderDots.forEach(item => item.classList.remove('slider__dot_active'));
    
    sliderItems[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
    
  };
  
  changeSlide(Array.from(sliderItems).findIndex(item => item.classList.contains('slider__item_active')));
  
  nextBtn.addEventListener('click', () => {
    let activeIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('slider__item_active'));
    let index = activeIndex + 1;
    if (index > sliderItems.length - 1) index = 0;
    changeSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    let activeIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('slider__item_active'));
    let index = activeIndex - 1;
    if (index < 0) index = sliderItems.length - 1;
    changeSlide(index);
  });

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      changeSlide(index);
    });
  });
})();
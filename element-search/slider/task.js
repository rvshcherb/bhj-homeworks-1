(function() {

  const sliderItems = document.querySelectorAll('.slider__item');
  const sliderDots = document.querySelectorAll('.slider__dot');

  const nextBtn = document.querySelector('.slider__arrow_next');
  const prevBtn = document.querySelector('.slider__arrow_prev');

  let position = 0;
  
  sliderDots[position].classList.add('slider__dot_active');
  
  const changeSlide = function(position) {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    sliderDots.forEach(item => item.classList.remove('slider__dot_active'));

    sliderItems[position].classList.add('slider__item_active');
    sliderDots[position].classList.add('slider__dot_active');
  };
  
  nextBtn.addEventListener('click', () => {
    position++;
    if (position > 4) position = 0;
    changeSlide(position);
  });

  prevBtn.addEventListener('click', () => {
    position--;
    if (position < 0) position = 4;
    changeSlide(position);
  });

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      changeSlide(index);
    });
  });
})();
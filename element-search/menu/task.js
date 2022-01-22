(function () {
  const navBars = document.querySelectorAll('.menu_main');
  
  navBars.forEach(bar => {
    const menuLinks = bar.querySelectorAll('.menu__link');
    const subMenuItems = bar.querySelectorAll('.menu_sub');

    menuLinks.forEach(link => {
      link.onclick = function() {
        if(link.closest('.menu__item').children.length > 1) {
          if(link.closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
            link.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
            return false;
          }

          subMenuItems.forEach(item => item.classList.remove('menu_active'));

          link.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
          return false;
        }
      };
    });
  });
})();


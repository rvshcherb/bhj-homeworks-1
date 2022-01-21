const addSecondNavBar = function() {
  const mainNavBar = document.querySelector('.menu_main');
  const additionNavBar = mainNavBar.cloneNode(true);
  const lorem = document.createElement('p');
  lorem.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorum dolor exercitationem unde? Temporibus magnam soluta quibusdam similique? Aliquid commodi explicabo inventore ullam tempore earum pariatur, repudiandae quas aliquam exercitationem!';
  mainNavBar.after(lorem);
  lorem.after(additionNavBar);
};

const navBar = function () {
  addSecondNavBar();

  const navBars = document.querySelectorAll('.menu_main');
  navBars.forEach(item => {
    const menuItems = item.querySelectorAll('.menu__item');
    const subMenuItems = item.querySelectorAll('.menu_sub');

    menuItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        subMenuItems.forEach(item => item.classList.remove('menu_active'));

        if (item.children.length > 1) {
          item.querySelector('.menu_sub').classList.add('menu_active');
        }
      });
    });
  });
};

navBar();
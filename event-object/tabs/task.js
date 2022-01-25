(function() {
  const tabList = document.querySelectorAll('.tab');
  const tabContentList = document.querySelectorAll('.tab__content');

  tabList.forEach((tab,index) => tab.addEventListener('click', function() {
      tabList.forEach(tab => tab.classList.remove('tab_active'));
      tabList[index].classList.add('tab_active');
      tabContentList.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
      tabContentList[index].classList.add('tab__content_active');
  }));
})();
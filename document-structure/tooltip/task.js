(function () {
  const tooltipList = document.querySelectorAll('.has-tooltip');
  const toolTip = document.createElement('div');
  toolTip.className = 'tooltip';
  toolTip.style.cssText = 'position: absolute';

  tooltipList.forEach(tooltip => {
    const tooltipContainer = document.createElement('div');
    tooltipContainer.style.cssText = "display: inline-block; position: relative";
    tooltipContainer.className = 'tooltipContainer';
    tooltipContainer.innerHTML = tooltip.outerHTML;
    tooltip.replaceWith(tooltipContainer);
  });

  const tooltipContainers = document.querySelectorAll('.tooltipContainer');

  tooltipContainers.forEach(tooltipContainer => tooltipContainer.querySelector('.has-tooltip')
    .addEventListener('click', function (evt) {
      evt.preventDefault();
      if (tooltipContainer.querySelector('.tooltip') && tooltipContainer.querySelector('.tooltip').classList.contains('tooltip_active')) {
        toolTip.classList.remove('tooltip_active');
      } else {
        toolTip.innerHTML = evt.target.title;
        toolTip.classList.add('tooltip_active');
        tooltipContainer.appendChild(toolTip);
      }
    }));
})();
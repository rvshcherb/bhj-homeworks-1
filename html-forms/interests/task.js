(function () {
  const interests = document.querySelectorAll('.interest');

  const checkChildren = function (evt) {
    const childrenOfSelected = evt.target.closest('.interest').querySelectorAll('.interest__check');
    childrenOfSelected.forEach(checkbox => checkbox.checked = evt.target.checked);
  };

  const checkParents = function (interest) {
    if (interest.parentElement.closest('.interest')) {

      const interestParent = interest.parentElement.closest('.interest').querySelector('.interest__check');
      const interestSiblings = interest.closest('.interests').querySelectorAll('.interest__check');
      const interestSiblingsChecked = interest.closest('.interests').querySelectorAll('.interest__check:checked');

      switch (true) {
        case interestSiblingsChecked.length === 0:
          interestParent.indeterminate = false;
          interestParent.checked = false;
          break;
        case interestSiblings.length - interestSiblingsChecked.length === 0:
          interestParent.indeterminate = false;
          interestParent.checked = true;
          break;
        case interestSiblings.length - interestSiblingsChecked.length > 0:
          interestParent.indeterminate = true;
          break;
      }
      checkParents(interest.parentElement.closest('.interest'));
    }
  };

  interests.forEach(interest =>
    interest.querySelector('.interest__check').addEventListener('click', (evt) => checkChildren(evt)));

  interests.forEach(interest =>
    interest.querySelector('.interest__check').addEventListener('click', () => checkParents(interest)));
})();
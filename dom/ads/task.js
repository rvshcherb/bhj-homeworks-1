(function() {
  const phrases = document.querySelectorAll('.rotator__case');
  let activePhraseIndex = Array.from(phrases).findIndex((item,idx)=> item.classList.contains('rotator__case_active'));
  let activePhrase = phrases[activePhraseIndex];

  const nextCase = function () {
    activePhrase.classList.remove('rotator__case_active');
    activePhrase = activePhrase.nextElementSibling ? activePhrase.nextElementSibling : phrases[0];
    activePhrase.classList.add('rotator__case_active');
    
    activePhrase.setAttribute('style', `color: ${activePhrase.dataset.color}`);
    setTimeout(nextCase, activePhrase.dataset.speed);
  };
  
  setTimeout(nextCase, 1000);
})();
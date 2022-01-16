const killMoleLogic = function() {
  const miss = document.getElementById('lost');
  const hit = document.getElementById('dead');
  let missCount = 0,
    hitCount = 0;

    const restartGame = function() {
      missCount = 0;
      hitCount = 0;
      hit.textContent = hitCount;
      miss.textContent = missCount;
    };

  const holeArr = [];
  for (let i = 1; i < 10; i++) {
    holeArr.push(document.getElementById(`hole${i}`));
  }

  for (let hole of holeArr) {
    hole.addEventListener('click', function() {
      if (hole.className.includes('hole_has-mole')) {
        hitCount++;
        hit.textContent = hitCount;
      } else {
        missCount++;
        miss.textContent = missCount;
      }

      if (hitCount > 9) {
        alert('Победа!');
        restartGame();
      }

      if (missCount > 4) {
        alert('Вы проиграли');
        restartGame();
      }
    });
  }
};

killMoleLogic();


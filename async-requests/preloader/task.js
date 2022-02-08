(function(){
  const loader = document.getElementById('loader');
  const currencyToShow = document.getElementById('items');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
  xhr.send();

  xhr.addEventListener('loadend', function() {
    loader.classList.remove('loader_active');
    
    const currencyList = JSON.parse(xhr.response).response.Valute;

    for(let currency in currencyList) {
      
      let currencyValue = currencyList[currency];
      
      currencyToShow.insertAdjacentHTML('afterBegin',`
      <div class="item">
        <div class="item__code">
          ${currencyValue.CharCode}
        </div>
        <div class="item__value">
          ${currencyValue.Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>  
      `);
    }
  });
})();
(function(){
  const products = document.querySelectorAll('.product');
  const quantityControls = document.querySelectorAll('.product__quantity-controls');
  const cart = document.querySelector('.cart__products');

  products.forEach(product => product.querySelector('.product__add')
    .addEventListener('click', function(evt) {
      const productListInCart = document.querySelectorAll('.cart__product');
      const addedQuantity = Array.from(productListInCart).find(productInCart => {
        return productInCart.dataset.id === product.dataset.id;
      });

      if(addedQuantity) {
        let addedCounter = Number(addedQuantity.querySelector('.cart__product-count').innerText);
        addedCounter += Number(product.querySelector('.product__quantity-value').innerText);
        addedQuantity.querySelector('.cart__product-count').innerText = addedCounter;
      } else {
        cart.insertAdjacentHTML('afterBegin', 
        `<div class="cart__product" data-id=${product.dataset.id}>
          <img class="cart__product-image" src=${product.querySelector('.product__image').src}>
          <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
        </div>`);
      }
    }));


    quantityControls.forEach(quantityControl => quantityControl.addEventListener('click', function(evt) {
      let counter = Number(quantityControl.querySelector('.product__quantity-value').innerText);
      switch(true) {
        case (evt.target.innerText === '-' && counter > 1):
          counter--;
          break;
        case evt.target.innerText === '+':
          counter++;
          break;
      }
      quantityControl.querySelector('.product__quantity-value').innerText = counter;
    }));
})();
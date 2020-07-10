var slideIndex = 0;
        showSlides();

        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
         slides[slideIndex-1].style.display = "block";  
         setTimeout(showSlides, 2000);
       }


// if (document.readyState == 'loading'){
//   document.addEventListener('DOMContentLoaded'. ready)
// }else{
//   ready()
// }

// function ready(){
//   var removeCartItemButton= document.getElementsByClassName('btn-danger');
//   console.log(removeCartItemButton);
//   for(var i=0; i<removeCartItemButton.length; i++){
//       var button =mremoveCartItemButton[i]
//       button.addEventListener('click'. removeCartItem)
//   }
//   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//   for(var i=0; i<quantityInputs.length; i++){
//     var input = quantityInputs[i]
//     input.addEventListener('change'. quantityChanged)
//   }
//   var addToCartButtons = document.getElementsByClassName('shop-item-button')
//   for(var i=0; i<addToCartButtons.length; i++) {
//     var button = addToCartButtons[i]
//     button.addEventListener('click'. addToCartClicked)
//   }
// }

// function removeCartItem() {
//   var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//   var input = event.target
//   if(isNaN(input.value) || input.value <= 0) {
//     input.value = 1
//   }
//   updateCartTotal()
// }

// function addToCartClicked(event) {
//   var button = event.target
//   var shopItem = button.parentElement.parentElement
//   var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//   var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//   var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//   console.log(title,price,imageSrc)
//   addItemToCart(tiyle,price,imageSrc)
//}

//function addItemToCart(title,price,imageSrc) {
 // var cartRaw = document.createElement('div')
  cartRaw.innerText = title
 // var cartItems = document.getElementsByClassName('cart-items')[0]
 // cartItems.append(cartRaw)
//}

// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//   var total = 0
//   for(var i=0; i<cartRaws.length; i++) {
//     var cartRaw = cartRaws[i]
//     var priceElement = cartRaw.getElementsByClassName('cart-price')[0]
//     var quantityElement = cartRaw.getElementsByClassName('cart-quantity-input')[0]
//     var price = parseFloat(priceElement.innerText.replace('$', ''))
//     var quantity = quantityElement.value
//     total = total + (price * quantity)
//   }
//   tota = math.round(total * 100)/100
//   document.getElementsByClassName('cart-total-price')[0].innerText = total
// }


//importing shoppingCart class
const { ShoppingCart } = require('./shoppingCart');

//creating instance of ShoppingCart
async function main() {
  const cart = new ShoppingCart();

  // addProduct method is used to add Products to cart
  await cart.addProduct('cornflakes', 1);
  await cart.addProduct('cornflakes', 1);
  await cart.addProduct('weetabix', 1);

  // getCartState method will print the current content and state of cart
  console.log(cart.getCartState());
}


//capturing errors in main() function
main().catch(error => console.error(error));
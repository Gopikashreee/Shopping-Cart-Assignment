//importing fetchProductPrice function from fetch_data module.
const { fetchProductPrice } = require('./fetch_data');

//empty array is intilaized to store the products added to cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a product to the cart by fetching its price.
   * @param {string} name - The product name.
   * @param {number} quantity - The quantity to add.
   * @throws Will throw an error if fetching the price fails.
   */
  async addProduct(name, quantity) {
    try {

        //fetches the price of product by calling function
      const price = await fetchProductPrice(name);

      //checks if product is already in cart
      const existingItem = this.items.find(item => item.name === name);
      
      //if product exits the cart, update.otherwise add product name, its quantity and price to cart
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ name, quantity, price });
      }
    } catch (error) {
      console.error(`Failed to add product ${name}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Calculates the subtotal for the items in the cart.
   * @returns {number} The subtotal.
   */
  calculateSubtotal() {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  /**
   * Calculates the tax based on the subtotal.
   * @param {number} subtotal - The subtotal amount.
   * @returns {number} The tax amount.
   */
  calculateTax(subtotal) {
    return parseFloat((subtotal * 0.125).toFixed(2));
  }

  /**
   * Calculates the total amount including tax.
   * @param {number} subtotal - The subtotal amount.
   * @param {number} tax - The tax amount.
   * @returns {number} The total amount.
   */
  calculateTotal(subtotal, tax) {
    return parseFloat((subtotal + tax).toFixed(2));
  }

  /**
   * Returns the cart state including subtotal, tax (12.5%), and total.
   * @returns {Object} The current state of the cart.
   */
  getCartState() {
    const subtotal = parseFloat(this.calculateSubtotal().toFixed(2));
    const tax = this.calculateTax(subtotal);
    const total = this.calculateTotal(subtotal, tax);

    return {
      items: this.items,
      subtotal,
      tax,
      total
    };
  }
}

module.exports = { ShoppingCart };

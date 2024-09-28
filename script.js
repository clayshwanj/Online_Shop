//Create an object class for the product to store the properties for id, name and price of the product.
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  //A method for displaying a product
  displayProduct() {
    return `Product ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
  }
}
//An instance of the class product
// Create some products
const product1 = new Product(1, "Laptop", 100000);
const product2 = new Product(2, "Phone", 35000);

//Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  // A method to calculate total price for the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
  // A method to display the shopping cart item details
  displayCartItem() {
    return `Product: ${this.product.name}, Quantity: ${
      this.quantity
    }, Total Price: ${this.getTotalPrice()}`;
  }
}

const cartItem1 = new ShoppingCartItem(product1, 2);

console.log(cartItem1.displayCartItem());

//Create another object class for the shopping cart which contains an array of ShoppingCartItem instances.
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add a ShoppingCartItem to the cart
  addItem(product, quantity) {
    // Check if the product already exists in the cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      // If the product is already in the cart, increase the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product is not in the cart, add a new ShoppingCartItem
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  // Method to remove a ShoppingCartItem from the cart by product ID
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to calculate the total price of the cart
  calculateTotalCartPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to get the number of items in the cart
  getCartItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Method to clear the cart
  clearCart() {
    this.items = [];
  }
}

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2); // Add 2 laptops
cart.addItem(product2, 3); // Add 3 phones

// Calculate the total price of the cart
console.log(`Total Cart Price: Ksh${cart.calculateTotalCartPrice()}`);

// Remove an item
cart.removeItem(2); // Remove phones (id: 2)

// Calculate the new total price of the cart
console.log(
  `Total Cart Price after removal: Ksh${cart.calculateTotalCartPrice()}`
);

// Get the total number of items in the cart
console.log(`Total Items in Cart: ${cart.getCartItemCount()}`);

// Clear the cart
cart.clearCart();
console.log(`Total Items after clearing: ${cart.getCartItemCount()}`);

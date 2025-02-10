# Shopping Cart Assignment

## Overview 
This project implements a simple shopping cart application using Node.js. The shopping cart allows users to add products with specified quantities, retrieve product prices from a Price API, and calculate the cart's subtotal, tax (12.5%), and total payable amount.

# Project Structure 
├── src/
│   ├── fetch_data.js         # Contains logic to fetch product prices from the Price API.
│   ├── shoppingCart.js       # Implements the shopping cart functionality.
│   └── index.js              # Entry point to demonstrate the shopping cart usage.
├── tests/
│   └── shoppingCart.test.js  # Unit tests for the shopping cart functionality.
├── test_data/                # Contains mock data for testing.
│   ├── cornflakes.json
│   └── weetabix.json...
├── package.json              # Project configuration and dependencies.
└── README.md                 # Project documentation.

## Setup Instructions

### Clone the Repository
Clone this repository to your local machine and navigate to the project directory:

git clone https://github.com/YourUsername/shopping-cart-assignment.git
cd shopping-cart-assignment

# Install Dependencies
npm install

# Price Api Setup in one terminal
npm run serve-products

# verifying that api is working by following this link
http://localhost:3001/products/cheerios

# running the application in another terminal
node src/index.js

# testing instruction using Jest
npm test

# Assumptions and Tradeoffs
Tax Rate: The tax rate is fixed at 12.5% of the subtotal.

Price API Dependency: The shopping cart fetches product prices dynamically from the Price API. It is assumed that the API is available and running when the cart operations are performed.

In-Memory Cart Storage: The shopping cart’s state is maintained in memory with no persistent storage, as per the assignment guidelines.

# Usage Details
Adding Products: Use the addProduct(name, quantity) method to add products to the cart. If the same product is added multiple times, its quantity is updated accordingly.

Calculating Totals: The getCartState() method calculates the subtotal, tax, and total payable amount. All monetary values are rounded to two decimal places.

Price API Integration: The fetchProductPrice function in src/fetch_data.js fetches product prices from the Price API. Ensure the API is running (via npm run serve-products) before using the shopping cart.

# Final Notes
Code Quality: The project uses descriptive variable and function names with a clear separation of concerns. Unit tests  using Jest provide 100% coverage for the core functionality.

Thank you for reviewing my submission!
"# Shopping_Cart_Assignment" 

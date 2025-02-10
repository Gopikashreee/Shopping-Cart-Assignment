// importing axios library to make hhtp requests in js
const axios = require('axios');

//base url of the api endpoint
const BASE_URL = 'http://localhost:3001/products';

//function to fetch product price
async function fetchProductPrice(product) {
    try {
        const response = await axios.get(`${BASE_URL}/${product}`);
        return response.data.price;
    } catch (error) {
        throw new Error(`Error fetching price for ${product}: ${error.message}`);
    }
}

//exporting fetchProductPrice function
module.exports = {fetchProductPrice};




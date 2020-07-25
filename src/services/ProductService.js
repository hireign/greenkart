/**
 * Service for product related API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */

/**
 * Get TOP products of same category
 *
 * @param {integer} id
 * @returns {Array of Product} products - array of product 
 */

function getProductById(id) {
    return fetch("/productdetails?id=" + id)
}

function getSimilarProductById(id) {
    return fetch("/similarproducts?id=" + id)
}

export default {
    getProductById, getSimilarProductById
}

import Axios from "axios";

async function getUserCartItems() {
    let cart = await Axios.get("/cart")
    let cartItem = cart.data
    cartItem.Products = cartItem.Products.map(prod => {
        return {
            ...prod,
            quantity: prod.CartProductList.quantity
        }
    })
    cartItem.Products = cartItem.Products
        .map(item => {
            return {
                ...item,
                totalCost: (item.salePrice * item.quantity).toFixed(2)
            }
        })
    let total = cartItem.Products
        .map(item => parseFloat(item.totalCost))
        .reduce((a, b) => a + b)
        .toFixed(2)

    cartItem = { ...cartItem, total }
    return cartItem;
}

async function updateCart(productId, quantity) {
    await Axios.put("/cart", {
        productId, quantity
    })
}

export {
    getUserCartItems,
    updateCart
}
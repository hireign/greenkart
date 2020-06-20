let orders = {
    1: {
        id: 1,
        addressId: 1,
        orderSummary: {
            productSummary: [
                {
                    productId: 1,
                    quantity: 5,
                    price: 19.99
                }, {
                    productId: 2,
                    quantity: 1,
                    price: 12.99
                }
            ],
            totalCost: 112.94
        },
        deliveryStatus: "SHIPPED"
    },
    2: {
        id: 2,
        addressId: 1,
        orderSummary: {
            productSummary: [
                {
                    productId: 2,
                    quantity: 2,
                    price: 12.99
                }
            ],
            totalCost: 25.98
        },
        deliveryStatus: "ORDERED"
    },
    3: {
        id: 3,
        addressId: 1,
        orderSummary: {
            productSummary: [
                {
                    productId: 2,
                    quantity: 2,
                    price: 12.99
                }
            ],
            totalCost: 25.98
        },
        deliveryStatus: "DELIVERED"
    }
}

async function getAllOrders() {
    return Object.values(orders)
}

export {
    getAllOrders
}
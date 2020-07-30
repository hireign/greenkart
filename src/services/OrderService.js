import Axios from "axios"

async function getAllOrders() {
    let ordersR = await Axios.get(`/orders`);
    let orders = ordersR.data || [];
    for (const ord of orders) {
        let totalCost = 0;
        for (const prd of ord.Products) {
            let { salePrice } = prd;
            let { quantity } = prd.OrderDetails;
            let prdTotal = salePrice * quantity;
            totalCost = totalCost + prdTotal;
        }
        ord.totalCost = totalCost;
    }
    return orders;
}

function cancelOrder(ordId) {
    return Axios.delete(`/orders/${ordId}`)
}

export {
    getAllOrders,
    cancelOrder
}
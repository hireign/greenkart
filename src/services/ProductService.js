let products = {
    1: {
        id: 1,
        title: "Gorgeous Indoor Plant",
        description: "Monstera may be the perfect houseplant for you if you're looking to create a big, bold, tropical feel in your home. While young, this houseplant has a dense, bushy shape, but as it grows, it wants to vine out. You can keep it bushy with regular pruning or let it climb up a vertical support (such as fishing line fastened into the ceiling), for a decidedly bold look.",
        image: "https://m.media-amazon.com/images/I/81hN56ywm2L._SR500,500_.jpg",
        salePrice: "$19.99",
        actualPrice: "$49.99"
    },
    2: {
        id: 2,
        title: "Bond Tools Mini D Handle Shovel",
        description: `Strong, lightweight steel handle, Comfortable soft non-slip grip, Durable heat-treated heads,
         Rust resistant powder coated paint, 5 Year guarantee. Material: -Metal. Dimensions: Overall Height - Top to Bottom: -7.48". Overall Width - Side to Side: -13.58". Overall Depth - Front to Back: -27.56".`,
        image: "https://images-na.ssl-images-amazon.com/images/I/81OBOfUWZ-L._AC_SL1500_.jpg",
        salePrice: "$19.99",
        actualPrice: "$49.99"
    }
}

async function getAllProducts() {
    return Object.values(products);
}

async function getProductById(id) {
    return products[id]
}

export {
    getAllProducts, getProductById
}
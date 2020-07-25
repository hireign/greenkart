import Axios from 'axios';

async function getAllProducts() {
    let res = await Axios.get('/searchBackend');
    return res.data;
}

async function searchProduct(args) {
    console.log("called searchProduct api: "+args)
    let res = await Axios.get(`/search/${args}`);
    return res.data;
}

export {
    getAllProducts,
    searchProduct
}
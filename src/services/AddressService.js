import Axios from 'axios';
/**
 * This Class makes the API call to the Address API.
 * i.e. getAddress, saveAndUpdate Address and delete address.
 *
 * @author [Jatin Partap Rana]
 */


let addresses = {

}

/**
 * Calling getAddress API.
 */
async function getAllAddresses() {

    let res = await Axios.get('/getAddress');

    return res.data
}

async function getAddressById(id) {
    return addresses[id];
}

/**
 * Calling saveEditAddress API.
 */
async function saveOrUpdateAddress(address) {
    let res = await Axios.post('/saveEditAddress', {
        id: address.id,
        name: address.name,
        mobile: address.mobile,
        street: address.street
    });

    return res.data
}
/**
 * Calling deleteAddress API.
 */
async function deleteAddressById(addressId) {
    let res = await Axios.post('/deleteAddress', {
        id: addressId,
    });

    return res.data;
}

export {
    getAllAddresses,
    getAddressById,
    saveOrUpdateAddress,
    deleteAddressById
}
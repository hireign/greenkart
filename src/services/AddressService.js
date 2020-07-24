import Axios from 'axios';
let addresses = {
    1: {
        id: 1,
        name: "Aman Vishnani",
        mobile: "410-430-0955",
        street: "2990  Harron Drive, Cockeysville, Maryland, 21030",
    },
    2: {
        id: 2,
        name: "Aman Vishnani",
        mobile: "706-796-7507",
        street: "1803  Riverside Drive, Augusta, Georgia, 30906",
    }
}


async function getAllAddresses() {
    console.log('Inside address');
   let res=  await Axios.get('/getAddress');
   console.log(res.data );
    return res.data
}

async function getAddressById(id) {
    return addresses[id];
}

function getNewId() {
    let max = -1;
    for(let addr of Object.values(addresses)) {
        if(max < addr.id) {
            max = addr.id
        }
    }
    return max + 1;
}

async function saveOrUpdateAddress(address) {

    console.log('Inside address updated');
   let res=  await Axios.post('/saveEditAddress', {
    id: address.id,
    name: address.name,
    mobile: address.mobile,
    street: address.street
  });
   console.log(res.data );
    return res.data


    // console.log("saveupdate");
    // console.log(address);
    // if(!address.id) {
    //     let id = getNewId()
    //     address.id = getNewId();
    //     addresses[id] = address;
    // } else {
    //     addresses[address.id] = address;
    // }
    // return address;
}

async function deleteAddressById(addressId) {
    
    console.log('Inside address delete module');
    let res=  await Axios.post('/deleteAddress', {
     id: addressId,
   });
    console.log(res.data );
    return;
}

export {
    getAllAddresses,
    getAddressById,
    saveOrUpdateAddress,
    deleteAddressById
}
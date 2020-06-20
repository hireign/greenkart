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
    return Object.values(addresses)
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
    if(!address.id) {
        let id = getNewId()
        address.id = getNewId();
        addresses[id] = address;
    } else {
        addresses[address.id] = address;
    }
    return address;
}

async function deleteAddressById(addressId) {
    if(!addressId) {
        return
    } else {
        delete addresses[addressId];
    }
    return;
}

export {
    getAllAddresses,
    getAddressById,
    saveOrUpdateAddress,
    deleteAddressById
}
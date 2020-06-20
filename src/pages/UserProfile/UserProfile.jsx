import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { getAllOrders } from "../../services/OrderService";
import { getAddressById, getAllAddresses } from "../../services/AddressService";
import PastOrders from '../../components/PastOrders';
import UserGreetingsCard from "../../components/UserGreetingsCard";
import UserNavSection from "../../components/UserNavSection";
import ManageAddress from "../../components/ManageAddress"
import { MANAGE_ADDRESS, PAST_ORDERS, LOGOUT } from "../../other/NavStateEnum";
// import PropTypes from 'prop-types'

function UserProfile(props) {

    const [orders, setOrders] = useState(null);
    const [addresses, setAddresses] = useState(null)
    const [currentTab, setCurrentTab] = useState(PAST_ORDERS)
    const [addressUpdated, setAddressUpdated] = useState(false)

    useEffect(() => {
        async function InitOrders() {
            let orders1 = await getAllOrders()
            for (const order of orders1) {
                let addr = await getAddressById(order.addressId)
                order.address = addr;
            }
            setOrders(orders1);
        }
        if(!orders && currentTab===PAST_ORDERS) {
            InitOrders()
        }
        return () => {

        }
    }, [currentTab, orders])

    useEffect(() => {
        async function InitAddresses() {
            let addresses = await getAllAddresses()
            setAddresses(addresses);
        }
        if(addressUpdated || (!addresses && currentTab===MANAGE_ADDRESS)) {
            InitAddresses();
            setAddressUpdated(false)
        }
        return () => {
            
        }
    }, [currentTab, addresses, addressUpdated])

    return (
        <div style={{ flex: 1, margin: "20px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <UserGreetingsCard />
                    <div style={{ marginTop: "20px" }}>
                        <UserNavSection selectedItem={currentTab} navChange={(e)=>setCurrentTab(e)}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    {currentTab === PAST_ORDERS && <PastOrders orders={orders} />}
                    {currentTab === MANAGE_ADDRESS && <ManageAddress onAddressUpdate={()=>setAddressUpdated(true)} addresses={addresses} />}
                    {currentTab === LOGOUT && "Session Will be logged out"}
                </Grid>
            </Grid>
        </div>
    )
}

UserProfile.propTypes = {

}

export default UserProfile


import SummaryItem from "../../components/SummaryItem";
import React, { useEffect, useState, useContext } from "react";
import { getAllAddresses } from "../../services/AddressService";
import { getUserCartItems, updateCart, deleteProductFromCart } from "../../services/CartService";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, LinearProgress } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddressCard from "../../components/AddressCard";
import { OrderContext } from "../../contexts/OrderContext";
import { useHistory } from "react-router-dom";

function Cart(props) {
    let history = useHistory();
    const [addresses, setAddresses] = useState(null)
    const [selectedAddr, setSelectedAddr] = useState(-1)
    const [loading, setLoading] = useState(false)
    const [orderSummary, setOrderSummary] = useState(null)

    const { setOrder } = useContext(OrderContext)

    async function fetchUserCart() {
        let cartItem = await getUserCartItems()
        setOrderSummary({
            productSummaries: cartItem.Products,
            total: cartItem.total
        });
    }
    async function fetchUserAddress() {
        let userAddresses = await getAllAddresses();
        setAddresses(userAddresses);
        if (userAddresses.length > 0) {
            setSelectedAddr(userAddresses[0].id)
        }
    }

    useEffect(() => {
        if (addresses === null) {
            fetchUserAddress()
        }
        return () => {
            //@TODO
        }
    }, [addresses])

    useEffect(() => {
        if (orderSummary === null) {
            fetchUserCart()
        }
        return () => {
            //@TODO
        }
    }, [orderSummary])

    function handlePayNow() {
        if (loading) {
            return;
        }
        setLoading(true)
        setOrder({
            addressId: selectedAddr,
            orderSummary: orderSummary
        })
        setTimeout(() => {
            history.push('/payment')
        }, 1000);
    }

    async function deleteProduct(productId) {
        await deleteProductFromCart(productId)
        setLoading(true)
        await fetchUserCart();
        setLoading(false)
    }

    async function handleQuantityChange(productSummary) {
        let { productId, quantity } = productSummary;
        await updateCart(productId, quantity)
        setLoading(true)
        await fetchUserCart();
        setLoading(false)
    }

    function renderCart() {
        return (
            <div>
                {loading && <LinearProgress color="secondary" />}
                <div style={{ margin: "40px" }}>
                    <h1>Order Summary</h1>
                    {(orderSummary === null || !orderSummary.productSummaries) ? <span>Loading</span> :
                        orderSummary.productSummaries.map((product, idx) =>
                            <div key={product.productId} style={{ marginTop: "5px" }}>
                                <SummaryItem quantityChange={(productSummary) => handleQuantityChange(productSummary)} product={product}
                                onDelete={_=>deleteProduct(product.productId)}></SummaryItem>
                            </div>
                        )
                    }
                    <br />
                    <Divider />
                    <Typography variant="h5" style={{ marginTop: "20px" }}> Choose Address for Dilevery</Typography>
                    <Grid container spacing={2}>
                        {addresses && addresses.map(
                            (addr, idx) =>
                                <Grid key={addr.id} item md={4} xs={12}
                                    style={{ marginTop: "20px" }} onClick={() => setSelectedAddr(addr.id)}>
                                    <AddressCard selectedId={selectedAddr} address={addr} />
                                </Grid>
                        )}
                    </Grid>
                    <br />
                    <Divider />
                    <Grid container justify={"flex-end"} style={{ marginTop: "20px" }}>
                        <Grid item xs={6} md={1}>
                            <Typography variant="h6">Total</Typography>
                        </Grid>
                        <Grid item xs={6} md={1}>
                            <Typography variant="h6">$ {(orderSummary && orderSummary.total)}</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Button disabled={loading} variant="contained" color="primary" onClick={handlePayNow}>
                                Pay Now
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    if (orderSummary && orderSummary.productSummaries && orderSummary.productSummaries.length > 0) {
        return renderCart();
    }

    return (
        <div style={{marginTop:"100px"}}>
            <Card>
                <CardContent>
                <Typography align="center" variant="h3">No Products found in Cart</Typography>
                    <Typography align="center" variant="h4">Add products to cart</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Cart;
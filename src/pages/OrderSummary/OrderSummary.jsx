import SummaryItem from "../../components/SummaryItem";
import React, { useEffect, useState, useContext } from "react";
import { getProductById } from "../../services/ProductService";
import { getAllAddresses } from "../../services/AddressService";
import { useParams } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, LinearProgress } from "@material-ui/core";
import AddressCard from "../../components/AddressCard";
import { OrderContext } from "../../contexts/OrderContext";
import { useHistory } from "react-router-dom";

function OrderSummary(props) {

    let { productId } = useParams()
    let history = useHistory();

    const [product, setProduct] = useState({
        id: -1,
        title: "Title",
        description: "Description.",
        image: "",
        salePrice: "",
        actualPrice: ""
    })
    const [addresses, setAddresses] = useState([])
    const [selectedAddr, setSelectedAddr] = useState(-1)
    const [loading, setLoading] = useState(false)
    const [orderSummary, setOrderSummary] = useState({
        productSummaries: [],
        total: 0
    })

    const { setOrder } = useContext(OrderContext)

    async function loadDetails(id) {
        let product = await getProductById(id)
        setProduct(product)
        setOrderSummary({
            total: parseFloat(product.salePrice.substr(1,))
        });
        let userAddresses = await getAllAddresses();
        setAddresses(userAddresses);
        if (userAddresses.length > 0) {
            setSelectedAddr(userAddresses[0].id)
        }
    }

    useEffect(() => {
        if (product.id === -1) {
            loadDetails(productId)
        }
        return () => {
            //@TODO
        }
    }, [product.id, productId])

    function handlePayNow() {
        if(loading) {
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

    function handleQuantityChange(productSummary) {
        setOrderSummary({
            productSummaries: [productSummary], // Only 1 product for easy checkout
            total: productSummary.orderTotal // Total cost = quantity x salePrice (1 product)
        })
    }

    return (
        <div>
            { loading && <LinearProgress color="secondary" />}
            <div style={{ margin: "40px" }}>
                <h1>Order Summary</h1>
                {product.id === -1 ? <span>Loading</span> : <SummaryItem quantityChange={(productSummary) => handleQuantityChange(productSummary)} product={product}></SummaryItem>}
                <br />
                <Divider />
                <Typography variant="h5" style={{ marginTop: "20px" }}> Choose Address for Dilevery</Typography>
                <Grid container spacing={2}>
                    {addresses.map(
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
                        <Typography variant="h6">$ {orderSummary.total}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button disabled={loading} variant="contained" color="primary" onClick={handlePayNow}>
                            Pay Now
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default OrderSummary;
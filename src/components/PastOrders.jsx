import React from 'react'
import { getAllOrders } from "../services/OrderService";
import { Grid, ExpansionPanelSummary, Typography, ExpansionPanel, Button } from '@material-ui/core'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OrderedItem from './OrderedItem';
import PropTypes from 'prop-types'

function PastOrders(props) {
    let orders = props.orders || [];
    function handleCancelOrder(orderId) {
        if(props.onCancelOrder) {
            props.onCancelOrder(orderId)
        }
    }
    return (
        <div>
            <Typography variant="h5" align="left" style={{
                marginBottom: "40px"
            }}>
                Manage Past Orders
            </Typography>
            {orders.map(
                (order, idx) => {
                    return <ExpansionPanel key={order.id} TransitionProps={{ unmountOnExit: true }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="order-content"
                        >
                            <Typography>Order ID: {order.id} {order.deliveryStatus} |  Total: ${order.totalCost}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                {
                                    order.Products.map((product) => {
                                        return <Grid item xs={12} key={product.productId}>
                                            <OrderedItem product={product} />
                                        </Grid>
                                    })
                                }
                                <Grid item xs={12}>
                                    {order.deliveryStatus==="In Process" && <Button onClick={_ => handleCancelOrder(order.id)} style={{float: "right", margin: "20px"}} color="secondary" variant="contained" >Cancel</Button>}
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                }
            )}
        </div>
    )
}

PastOrders.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.any)
}

export default PastOrders


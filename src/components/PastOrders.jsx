import React from 'react'
import { Grid, ExpansionPanelSummary, Typography, ExpansionPanel } from '@material-ui/core'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OrderedItem from './OrderedItem';
import PropTypes from 'prop-types'

function PastOrders(props) {
    let orders = props.orders || [];

    return (
        <div>
            <Typography variant="h5" align="left" style={{
                marginBottom: "40px"
            }}>Manage Past Orders</Typography>
            {orders.map(
                (order, idx) => {
                    return <ExpansionPanel key={order.id} TransitionProps={{ unmountOnExit: true }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="order-content"
                        >
                            <Typography>Order ID: {order.id} {order.deliveryStatus} |  Total: ${order.orderSummary.totalCost}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                {
                                    order.orderSummary.productSummary.map((product) => {
                                        return <Grid item xs={12} key={product.productId}>
                                            <OrderedItem productId={product.productId}
                                                quantity={product.quantity} price={product.price} />
                                        </Grid>
                                    })
                                }
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


import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'
import ProductService from '../services/ProductService'

function OrderedItem(props) {

    let { product } = props;
    return (
        <div style={{width:"100%"}}>
            <Card>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardMedia
                            image={product.image}
                            title={product.title}
                            style={{ width: "150px", height: "150px", margin: "auto" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <div>
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    ${product.salePrice}
                                </Typography>
                            </CardContent>
                            <div>
                                {product.OrderDetails.quantity} Item(s)
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div>
                            <CardContent>
                                <Typography component="h4" variant="h4">
                                    ${(product.OrderDetails.quantity * product.salePrice).toFixed(2)}
                                </Typography>
                            </CardContent>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

OrderedItem.propTypes = {
    product: PropTypes.any
}

export default OrderedItem


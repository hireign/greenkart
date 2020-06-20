import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'
import { getProductById } from '../services/ProductService'

function OrderedItem(props) {

    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        async function init() {
            let product = await getProductById(props.productId)
            setProductDetail(product);    
        }
        if( !productDetail ) {
            init()
        }
        return () => {
        }
    }, [props.productId, productDetail])

    if(productDetail == null) {
        return <div>
            Loading
        </div>
    }


    return (
        <div style={{width:"100%"}}>
            <Card>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardMedia
                            image={productDetail.image}
                            title={productDetail.title}
                            style={{ width: "150px", height: "150px", margin: "auto" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <div>
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    {productDetail.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {props.price}
                                </Typography>
                            </CardContent>
                            <div>
                                {props.quantity} Item(s)
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div>
                            <CardContent>
                                <Typography component="h4" variant="h4">
                                    ${(props.quantity * props.price).toFixed(2)}
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
    productId: PropTypes.number,
    quantity: PropTypes.number,
    price: PropTypes.number,
}

export default OrderedItem


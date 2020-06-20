import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Grid from "@material-ui/core/Grid";

export default function SummaryItem(props) {
    let product = props.product;
    let [quantity, setQuantity] = useState(-1);
    const [total, setTotal] = useState(product.salePrice.substr(1,))
    function handleChange(quantity) {
        if(props.quantityChange) {
            let price = parseFloat(product.salePrice.substr(1,))
            let total = (quantity * price).toFixed(2)
            setTotal(total)
            let productSummary = {
                price: price,
                orderTotal: total,
                ...product,
                quantity
            }
            props.quantityChange(productSummary);
        }
        setQuantity(quantity)
    }

    useEffect(() => {
        if(quantity === -1) {
            handleChange(1);
        }
        return () => {
            
        }
    })

    return (
        <div>
            <Card>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardMedia
                            image={product.image}
                            title={product.title}
                            style={{width:"150px", height: "150px", margin: "auto"}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {product.salePrice}
                                </Typography>
                            </CardContent>
                            <div>
                                <IconButton aria-label="remove" disabled={quantity===1} onClick={()=>handleChange(quantity-1)}>
                                    <Remove />
                                </IconButton>
                                {quantity} Item(s)
                                <IconButton aria-label="Add" onClick={()=>handleChange(quantity+1)}>
                                    <Add />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <CardContent>
                                <Typography component="h4" variant="h4">
                                    ${total}
                                </Typography>
                            </CardContent>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

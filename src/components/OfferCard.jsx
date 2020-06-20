import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: "auto"
    },
    media: {
        height: 200
    },
    mediaImg: {
        height: "200px",
        width: "auto",
        margin: "auto"
    }
});

function OfferCard(props) {
    const classes = useStyles();
    let product = props.product;

    let [offerItem, ] = useState({
        title: product.title,
        image: product.image,
        description: product.description,
        id: product.id,
        salePrice: product.salePrice,
        actualPrice: product.actualPrice
    })

    return (
        <Card className={classes.root} title={offerItem.title}>
            <CardActionArea>
                <CardMedia
                    classes={{
                        media: classes.mediaImg,
                        root: classes.media
                    }}
                    image={offerItem.image}
                    title={offerItem.title}
                    component="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <span style={{color:"red", textDecoration: "bold"}}>
                            Offer:
                        </span> { offerItem.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Offer: { offerItem.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={"/quick-buy/"+offerItem.id} style={{textDecorationLine: "none"}}>
                    <Button size="small" color="secondary" title="Easy one click checkout">
                        Quick buy for {offerItem.salePrice}
                    </Button>
                </Link>
                <s title={"Actual price " + offerItem.actualPrice} style={{color: "#555"}}>{offerItem.actualPrice}</s>
            </CardActions>
        </Card>
    );
}

export default OfferCard;
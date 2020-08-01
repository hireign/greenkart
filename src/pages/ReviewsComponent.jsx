import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { Typography, Hidden, IconButton, Button, Dialog, DialogTitle, Snackbar, TextField, FormControl, Input } from '@material-ui/core';
import { AccountCircle, ThumbDown, ThumbUp } from '@material-ui/icons'
import { useParams } from 'react-router-dom';
import CommentService from "../services/CommentService";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        ">": {
            marginTop: theme.spacing(10)
        }
    },
    paper: {
        marginTop: "20px",
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    button: {
        marginLeft: "20px"
    }
}));

export default function () {
    const classes = useStyles()
    let { id } = useParams()
    const loggedIn = sessionStorage.getItem("loggedIn")
    // TODO: loading
    const [reviews, setReviews] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClick = (id, task) => {
        CommentService.rateComment(id, task)
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    useEffect(() => {
        // code to run on component mount
        if (reviews == null)
            CommentService.getComments(id)
                .then(data => data.json())
                .then(data => {
                    setReviews(data);
                })
                .catch(err => {
                    // TODO: popup error
                });
    }, [reviews])

    const createReview = () => {
        console.log(values)
        CommentService.createComment(id, values.comment, values.rating, 1)
    }
    const [values, setValues] = React.useState({
        comment: '',
        rating: 0
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    return <div className={classes.root}>
        <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
            <Grid item xs={12} md={2}>
                <Button variant="contained" color="primary" classes={{ root: classes.button }} onClick={createReview}
                    disabled={!loggedIn} hint={loggedIn ? "create review" : "Please login to write review"}>Create a review</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Rating name="rating"  onChange={handleChange('rating')}/>
                <FormControl fullWidth >
                    <Input
                        id="standard-adornment-amount"
                        value={values.comment}
                        hint="write comment"
                        onChange={handleChange('comment')}
                    />
                </FormControl>   
            </Grid>
        </Grid>
        <br />
        <br />
        {
            reviews && reviews.length > 0 ? reviews.map(ele => {
                return reviewCard(classes, ele, handleClick, handleClose)
            }) :
                (reviews && reviews.length == 0 ?
                    <Typography variant="h6" color="primary">
                        no reviews available
            </Typography>
                    : <Typography variant="h6" color="primary">
                        Loading...
            </Typography>
                )
        }
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                Thank you! this would help us better organise reviews.
            </MuiAlert>
        </Snackbar>

    </div>
}

function reviewCard(classes, data, handleClick, handleClose) {


    return <Grid container spacing={5} alignItems="center">
        <Hidden xsDown>
            <Grid item xs={4} sm={2}>
                <Paper>
                    <Grid container item direction="column" justify="space-around" alignItems="center">
                        <Grid item>
                            <IconButton onClick={() => handleClick(data.product_review_id, "increase")}>
                                <ThumbUp color="primary"></ThumbUp>
                            </IconButton> </Grid>
                        <Grid item>Review</Grid>
                        <Grid item>
                            <IconButton > <ThumbDown color="primary" onClick={() => handleClick(data.product_review_id, "decrease")}></ThumbDown></IconButton> </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Hidden>
        <Grid item xs={10} sm={10} >
            <Paper className={classes.paper}>
                <Typography variant="h6" color="primary">
                    <AccountCircle /> {"TODO"/*{name} */}
                </Typography>
                <Rating name="read-only" value={data.rating} readOnly />
                <Typography variant="body2">
                    {data.comment}
                </Typography>
                <Hidden smUp>
                    <ThumbUp color="primary"></ThumbUp>
                    <ThumbDown color="primary"></ThumbDown>
                </Hidden>
            </Paper>
        </Grid>
    </Grid>
}
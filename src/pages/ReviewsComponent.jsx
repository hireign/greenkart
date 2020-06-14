import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { Typography, TextField } from '@material-ui/core';
import { AccountCircle, ThumbDown, ThumbUp } from '@material-ui/icons'

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
    image: {
        paddingLeft: theme.spacing(2),
        maxWidth: "80%",
        height: "auto",
        align: 'right',
        color: theme.palette.text.secondary,
    },
    ratingText: {
        paddingLeft: theme.spacing(2),
    }
}));

export default function () {
    const classes = useStyles()
    return <div className={classes.root} >
        {createReview(classes)}
        {reviewCard(classes)}
        {reviewCard(classes)}
        {reviewCard(classes)}
    </div>
}

function createReview(classes) {
    return <Paper elevation={2}><Grid container spacing={5} alignItems="center">
        <Grid item xs={4} >
            <Rating name="read-only" />
        </Grid>
        <Grid item xs={8} container direction="column" spacing={2} >    
        <Grid item> <TextField id="standard-basic" label="Title" /></Grid>
            <Grid>
                <TextField id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={2}
                    variant="outlined" /></Grid>
        </Grid>
    </Grid>
    </Paper>
}

function reviewCard(classes, name = "Lilly", rating = 4) {
    return <Grid container spacing={5} alignItems="center">
        <Grid item xs={2} >
            <Paper>
                <Grid container item direction="column" justify="space-around" alignItems="center" spacing={1}>
                    <Grid item>
                        <ThumbUp color="primary"></ThumbUp> </Grid>
                    <Grid item>Review</Grid>
                    <Grid item>
                        <ThumbDown color="primary"></ThumbDown> </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={10} >
            <Paper className={classes.paper}>
                <Typography variant="h6" color="primary">
                    <AccountCircle /> {name}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
            </Paper>
        </Grid>
    </Grid>

}
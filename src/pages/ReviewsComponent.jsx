import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { Typography, Hidden, IconButton } from '@material-ui/core';
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
}));

export default function () {
    const classes = useStyles()

    return <div className={classes.root} >
        {reviewCard(classes)}
        {reviewCard(classes)}
        {reviewCard(classes)}
    </div>
}

function reviewCard(classes, name = "Lilly", rating = 4) {
    return <Grid container spacing={5} alignItems="center">
        <Hidden xsDown>
            <Grid item xs={4} sm={2}>
                <Paper>
                    <Grid container item direction="column" justify="space-around" alignItems="center">
                        <Grid item>
                            <IconButton >
                                <ThumbUp color="primary"></ThumbUp>
                            </IconButton> </Grid>
                        <Grid item>Review</Grid>
                        <Grid item>
                            <IconButton > <ThumbDown color="primary"></ThumbDown></IconButton> </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Hidden>
        <Grid item xs={10} sm={10} >
            <Paper className={classes.paper}>
                <Typography variant="h6" color="primary">
                    <AccountCircle /> {name}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                </Typography>
                <Hidden smUp>
                    <ThumbUp color="primary"></ThumbUp>
                    <ThumbDown color="primary"></ThumbDown>
                </Hidden>
            </Paper>
        </Grid>
    </Grid>
}
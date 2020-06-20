import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        // flexGrow: 1,
        textDecoration: "none",
        color: "white"
    },
    noDecoration: {
        textDecoration: "none",
        color: "white"
    }
}))


function Header() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Link to="/" className={classes.title}>
                        <Typography variant="h4">
                            Greenkart
                        </Typography>
                    </Link>
                    <div className={classes.grow}></div>
                    <Link to="/user" className={classes.noDecoration}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                            <Typography variant="h6">
                                Aman
                            </Typography>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
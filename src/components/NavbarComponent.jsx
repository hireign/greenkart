import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { InputAdornment, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" spacing={2} style={{ textDecoration: 'none', color: "white", display: "flex", alignItems: "center" }}>
                        <ShoppingCart style={{ display: "inline-block" }} />
                        <Typography className={classes.title} variant="h6" noWrap >
                            GreenKart
                        </Typography>
                    </Link>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="inherit" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className={classes.grow} />
                    <IconButton color="inherit">
                        <Badge badgeContent={10} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton edge="end" color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

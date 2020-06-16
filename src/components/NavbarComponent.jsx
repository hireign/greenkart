import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { InputAdornment, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    divMargin: {
        marginLeft: theme.spacing(4)
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event, reason) => {
  
      setOpen(false);
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
                    <div className={classes.divMargin}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment  position="start">
                                    <SearchIcon  />
                                </InputAdornment>
                            ),
                        }}
                        defaultValue="feature unavailable"
                    />
                    </div>
                    <div className={classes.grow} />
                    <IconButton onClick={handleClick}>
                        <Badge badgeContent={10} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={handleClick} edge="end">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Next page is currently unavailable!
        </MuiAlert>
      </Snackbar>
        </div>
    );
}

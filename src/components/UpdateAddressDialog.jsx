import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, TextField, DialogActions, Button } from "@material-ui/core";
import PropTypes from 'prop-types'

function UpdateAddressDialog(props) {
    const [address, setAddress] = useState(null)
    if (!address && props.address) {
        setAddress({
            ...props.address
        })
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setAddress({
            ...address,
            [evt.target.name]: value
        });
    }

    function isEmpty(str) {
        if(!str) return true;
        if(str.length === 0) return true;
        return false;
    }

    function validMobile(mobile) {
        let mobileRegEx = /^[1-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/
        return mobileRegEx.test(mobile);
    }
    return (
        <div>
            {address === null ? "Loading" :
                <Dialog open={props.open} onClose={props.handleClose}>
                    <DialogTitle>Edit Address</DialogTitle>
                    <DialogContent>
                        <DialogContentText> Fill the details and click save to confirm changes.</DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name="name" required label="Name" value={address.name} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="street" multiline rowsMax={4} required id="standard-required" label="Address" value={address.street}  onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="mobile" required label="Mobile" value={address.mobile} 
                                onChange={handleChange} error={!validMobile(address.mobile)}
                                helperText="Format: 111-111-1111"/>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button disabled={!validMobile(address.mobile) || isEmpty(address.name) || isEmpty(address.street)}
                         color="primary" variant="contained" onClick={() => {props.onSave && props.onSave(address)}}>Save</Button>
                        <Button color="secondary" variant="contained" onClick={() => {props.handleClose && props.handleClose()}}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    )
}

UpdateAddressDialog.propTypes = {
    address: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        street: PropTypes.string,
        mobile: PropTypes.string,
    }),
    open: PropTypes.bool,
    handleClose: PropTypes.func
}

export default UpdateAddressDialog


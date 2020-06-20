import React, { useState } from 'react'
import { Grid, Typography } from "@material-ui/core";
import AddressCard from "./AddressCard";
import PropTypes from 'prop-types'
import { saveOrUpdateAddress, deleteAddressById } from "../service/AddressService";
import UpdateAddressDialog from "./UpdateAddressDialog";
import ConfirmationDialog from './ConfirmationDialog';

function ManageAddress(props) {
    let addresses = props.addresses || [];
    let config = {
        edit: true,
        delete: true
    }
    const [editState, setEditState] = useState({
        open: false,
        address: {}
    })
    const [deleteState, setDeleteState] = useState({
        open: false,
        address: {}
    });

    function handleSave(address) {
        saveOrUpdateAddress(address).then(
            _ => {
                handleEditClose()
                props.onAddressUpdate && props.onAddressUpdate()
            }
        )
    }

    function handleEdit(address) {
        setEditState({
            open: true,
            address: address
        })
    }


    function handleEditClose() {
        let state = { ...editState }
        state.open = false;
        setEditState(state);
    }

    function handleDelete(address) {
        setDeleteState({
            open: true,
            address: address
        })
    }
    function handleDeleteClose() {
        setDeleteState({
            open: false,
            address: {}
        })
    }

    function deleteAddress() {
        deleteAddressById(deleteState.address.id);
        handleDeleteClose();
        props.onAddressUpdate && props.onAddressUpdate()
    }

    return (
        <div>
            <Typography variant="h5" align="left" style={{
                marginBottom: "40px"
            }}>
                Manage Address
            </Typography>
            <Grid spacing={1} container>
                <Grid item xs={12} style={{
                    borderStyle: "dashed",
                    marginBottom:"20px",
                    cursor: "pointer"
                }} onClick={()=>{handleEdit({})}}>
                    Add new Address
                </Grid>
                {
                    addresses.map(
                        (address) => {
                            return (
                                <Grid item key={address.id} xs={12} sm={6} md={6}>
                                    <AddressCard onEdit={handleEdit} onDelete={() => { handleDelete(address) }} config={config} address={address} />
                                </Grid>
                            );
                        }
                    )
                }
            </Grid>
            {editState.open &&
                <UpdateAddressDialog onSave={_ => { handleSave && handleSave(_) }} handleClose={handleEditClose} open={editState.open} address={editState.address} />}
            {
                deleteState.open &&
                <ConfirmationDialog open={deleteState.open} title="Are you sure you want to Delete?"
                    onCancel={() => { handleDeleteClose() }} onConfirm={deleteAddress} />
            }
        </div>
    )
}

ManageAddress.propTypes = {
    addresses: PropTypes.arrayOf(PropTypes.any)
}

export default ManageAddress


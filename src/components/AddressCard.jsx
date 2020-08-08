import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, CardContent, Card, CardActionArea, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    backDrop: {
        zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0", left: "0",
    },
    backDropButtons: {
        display: "grid",
        placeItems: "center",
        height: "100%"
    }
})

function AddressCard(props) {
    let selected = false;
    const [showHover, setShowHover] = useState(false)

    let classes = useStyles()


    if (props.selectedId === props.address.id) {
        selected = true;
    }

    function handleHover() {
        if (props.config && (props.config.edit || props.config.delete) && !showHover) {
            setShowHover(true)
        } else {
            setShowHover(false);
        }
    }

    function handleNotHover() {
        setShowHover(false);
    }

    return (
        <div style={selected ? { borderStyle: "dashed" } : {}}>
            <Card onMouseEnter={handleHover} onMouseLeave={handleNotHover} style={{ position: "relative" }}>
                {
                    showHover &&
                    <div className={classes.backDrop}>
                        <div className={classes.backDropButtons}>
                            <div>
                                <Button color="primary" onClick={() => { props.onEdit && props.onEdit(props.address) }} variant="contained" style={{ marginRight: "5px" }}>Edit</Button>
                                <Button color="secondary" onClick={() => { props.onDelete && props.onDelete(props.address) }} variant="contained">Delete</Button>
                            </div>
                        </div>
                    </div>
                }
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" align="left">{props.address.name}</Typography> <br />
                        <Typography variant="body1" align="left" title="address">
                            {props.address.street}
                        </Typography>
                        <Typography align="left" variant="subtitle1">
                            Mobile: {props.address.mobile}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

AddressCard.propTypes = {
    address: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        mobile: PropTypes.string,
        street: PropTypes.string,
    }),
    selected: PropTypes.bool,
    config: PropTypes.shape({
        edit: PropTypes.bool,
        delete: PropTypes.bool
    })

}

export default AddressCard


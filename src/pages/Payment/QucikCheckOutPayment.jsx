import React, { useContext, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { OrderContext } from '../../contexts/OrderContext'
import { getAddressById } from '../../services/AddressService';
import Axios from 'axios';
import { Stepper, Step, StepLabel, StepContent, Button, Grid, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Typography, Card, CardContent, TextField, CardMedia } from '@material-ui/core';
import AddressCard from '../../components/AddressCard';
import { useParams } from "react-router-dom";

function Payment(props) {
    // const param=[props.match.params];
    let {productId, amount, productName} = useParams()
    console.log('Amount')
    console.log(amount)
    const { order } = useContext(OrderContext);
    const [address, setAddress] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [fields, setFields] = useState({
        creditCard: {
            value: '',
            valid: true
        },
        cvv: {
            value: '',
            valid: true
        },
        expiryDate: {
            value: '',
            valid: true
        }
    })

    function validateFields(card, cvv, expiryDate) {
        let cardRegex = RegExp(/^(\d){4}([-\s]){0,1}(\d){4}([-\s]){0,1}(\d){4}([-\s]){0,1}(\d){4}/)
        if (card) {
            let state = { ...fields }
            state.creditCard.valid = cardRegex.test(fields.creditCard.value);
            setFields(state)
        }
        let cvvRegex = RegExp(/^(\d){3,4}/)
        if (cvv) {
            let state = { ...fields }
            state.cvv.valid = cvvRegex.test(fields.cvv.value);
            setFields(state)
        }
        let expDateRegex1 = /^0[1-9]{1}(\d){2}$/
        let expDateRegex2 = /^1[1-2]{1}(\d){2}$/
        if (expiryDate) {
            let state = { ...fields }
            let valid = expDateRegex1.test(fields.expiryDate.value) || expDateRegex2.test(fields.expiryDate.value);
            if (valid) {
                valid = valid & (parseInt(fields.expiryDate.value) % 100) >= 20;
            } else {
                valid = false;
            }
            state.expiryDate.valid = valid;
            setFields(state)
        }
    }


    function payment(){
        
        Axios.post('/qucikCheckOutPayment', {
            paymentAmount: amount,
            cardNumber:fields.creditCard.value,
            productId: productId
        }).then() 
        .catch(err => {
            console.log(err);
        })
        setActiveStep(2)
    }


    useEffect(() => {
        
        async function init() {
            if (address && !address.id) {
                const addressId = order.addressId;
                let addr = await getAddressById(addressId || 1) // @TODO: Remove addressId=1
                setAddress(addr)
            }
        }
        init()
        return () => {

        }
    }, [order.addressId, address])
    
    return (
        <div>
            <Grid item xs={12} md={6} style={{ margin: "10px auto" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    <Step>
                        <StepLabel>Order Summary</StepLabel>
                        <StepContent>
                            {address && <AddressCard address={address} />}
                            <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Product
                                            </TableCell>
                                            <TableCell>
                                                Quantity
                                            </TableCell>
                                            <TableCell>
                                                Cost
                                            </TableCell>
                                            <TableCell>
                                                Sub Total
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                                    <TableRow>
                                                        <TableCell>{productName}</TableCell>
                                                        <TableCell>1</TableCell>
                                                        <TableCell>{amount}</TableCell>
                                                        <TableCell>{amount}</TableCell>
                                                    </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {
                                order && order.orderSummary &&
                                <Typography variant="h6">Total: </Typography>
                            }
                            <Button color="primary" variant="contained" style={{ marginTop: "20px" }} onClick={() => setActiveStep(1)}>Confirm</Button>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Payment Information</StepLabel>
                        <StepContent>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Enter Credit Card Details</Typography>
                                    <TextField
                                        onChange={(e) => {
                                            fields.creditCard.value = e.target.value
                                            validateFields(true, false)
                                        }}
                                        error={!fields.creditCard.valid}
                                        id="outlined-credit-card-field"
                                        label="Credit Card"
                                        helperText="Example 1111 1111 1111 1111."
                                        variant="outlined"
                                        style={{ width: "100%", marginTop: "20px" }}
                                        value={fields.creditCard.value}
                                    />
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            fields.cvv.value = e.target.value
                                            validateFields(false, true)
                                        }}
                                        error={!fields.cvv.valid}
                                        id="outlined-cvv-field"
                                        label="CVV"
                                        helperText="3 or 4 digit at the back of yur card."
                                        variant="outlined"
                                        type="password"
                                        style={{ width: "100%", marginTop: "20px" }}
                                        value={fields.cvv.value}
                                    />
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            fields.expiryDate.value = e.target.value
                                            validateFields(false, false, true)
                                        }}
                                        error={!fields.expiryDate.valid}
                                        id="outlined-expiry-field"
                                        label="Expiry Date"
                                        helperText="Future Date in MMYY format."
                                        variant="outlined"
                                        style={{ width: "100%", marginTop: "20px" }}
                                        value={fields.expiryDate.value}
                                    />
                                    <Grid container style={{ marginTop: "20px" }}>
                                        <Grid item xs={6}>
                                            <Button color="secondary" variant="contained" onClick={() => setActiveStep(0)}>Back</Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button variant="contained" onClick={() => payment()}
                                                disabled={!fields.creditCard.valid || !fields.cvv.valid || !fields.expiryDate.valid || !fields.creditCard || !fields.cvv.value || !fields.expiryDate.value}>
                                                Pay Now
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Confirmation</StepLabel>
                        <StepContent>
                            <Card>
                                <Typography variant="h6">Payment Recieved</Typography>
                                <CardMedia style={{ width: "200px" }}
                                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1024px-Green_tick.svg.png" />
                                <CardContent>
                                    Check User Section on the top right corner for Order History
                                </CardContent>
                            </Card>
                        </StepContent>
                    </Step>
                </Stepper>
            </Grid>
        </div>
    )
}

Payment.propTypes = {

}

export default Payment


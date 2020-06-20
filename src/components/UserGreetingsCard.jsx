import React from 'react'
import { Grid, Card, Avatar, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

function UserGreetingsCard(props) {
    return (
        <div>
            <Card>
                <Grid container spacing={2} style={{ padding: "10px" }}>
                    <Grid item md={2} lg={1}>
                        <Avatar src={props.image || "https://www.amanvishnani.com/images/forweb.jpg"} alt="Aman">A</Avatar>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={7} lg={8}>
                        <Typography variant="subtitle2" align="left">Hello,</Typography>
                        <Typography variant="body1" align="left">{props.name || "Aman Vishnani"}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

UserGreetingsCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export default UserGreetingsCard


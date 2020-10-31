import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import "./style.css";
import Icon from '@material-ui/core/Icon';

function Header() {
    return (
        <>
            <Grid className="Header-heading header-style" container justify="center">
                <Icon className="far fa-id-badge fa-5x" color="secondary" />
                <Typography className="pl-3" variant="h2" align="center" color="secondary">Employee Directory</Typography>
            </Grid>
        </>
    )
}

export default Header;
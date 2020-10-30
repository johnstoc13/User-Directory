import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"

function Header() {
    return (
        <>
            <Grid className="Header-heading" container justify="center">
                <Typography variant="h1" align="center">Employee Directory</Typography>
            </Grid>
        </>
    )
}

export default Header;
import React from "react";
import TextField from '@material-ui/core/TextField';

function SearchBox(props) {
    return (
        <TextField color="secondary" variant="outlined" label="Search Here" type="search" name="search" onChange={props.handleInputChange} />
    )
}

export default SearchBox;
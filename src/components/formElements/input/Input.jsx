import React from "react";
import MaterialInput from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: "flex"
    }
};

const Input = ({ defaultValue, className = "", inputProps = {}, ...props }) => {
    return (
        <MaterialInput
            { ...{ defaultValue, className, inputProps, ...props } }
        />
    );
};

export default withStyles(styles)(Input);
import React from "react";
import MaterialInput from '@material-ui/core/Input';

const Input = ({ defaultValue = "", className = "", inputProps = {}, ...props }) => {
    return (
        <MaterialInput
            { ...{ defaultValue, className, inputProps, props } }
        />
    );
};

export default Input;
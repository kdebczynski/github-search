import React from "react";
import MaterialButton from '@material-ui/core/Button';

const Button = ({ variant = "outlined", disabled = false, children, ...props }) => {
    return (
        <MaterialButton { ...{ variant, disabled, ...props } }>
            { children }
        </MaterialButton>
    );
};

export default Button;
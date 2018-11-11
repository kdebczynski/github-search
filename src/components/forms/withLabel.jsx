import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';

export default (Component, { label, className = "" }) => {
    
    const WithLabel = (props) => {
        return (
            <div className={ className }>
                <FormHelperText>{ label }</FormHelperText>
                <Component { ...props } />
            </div>
        );
    };

    return WithLabel;
};
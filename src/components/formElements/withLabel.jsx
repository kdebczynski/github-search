import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';

export default (Component) => {
    
    const WithLabel = ({ label, withLabelClassName, ...props }) => {
        return (
            <div className={ withLabelClassName }>
                <FormHelperText>{ label }</FormHelperText>
                <Component { ...props } />
            </div>
        );
    };

    return WithLabel;
};
import React from "react";
import MaterialSelect from '@material-ui/core/Select';
import MaterialMenuItem from '@material-ui/core/MenuItem';

const renderOptions = ({ options = [] }) => {
    return options.map(option => (
        <MaterialMenuItem
            key={ option.value }
            value={ option.value }
        >
            { option.name }
        </MaterialMenuItem>
    ));
}

const renderEmptyOption = ({ value = "", name = "None" } = {}) => {
    return (
        <MaterialMenuItem value={ value }>
            <em>{ name }</em>
        </MaterialMenuItem>
    );
}

const Select = ({ id = "", name = "", selectedValue = "", shouldRenderEmptyOption = true, options, onChange, ...props }) => {
    return (
        <MaterialSelect
            value={ selectedValue }
            onChange={ onChange }
            inputProps={ { name, id } }
            displayEmpty={ shouldRenderEmptyOption }
            { ...props }
        >
            { shouldRenderEmptyOption && renderEmptyOption() }
            { renderOptions({ options }) }
        </MaterialSelect>
    );
};

export default Select;
import React from "react";
import MaterialSelect from '@material-ui/core/Select';
import MaterialMenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Input from "components/formElements/input/Input";

const styles = {
    root: {
        display: "flex"
    },
    selectMenu: {
        width: "100%"
    }
};

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

const Select = ({
    id = "",
    name = "",
    selectedValue = "",
    shouldRenderEmptyOption = true,
    emptyOption = { value: "", name: "None" },
    options,
    onChange,
    ...props
}) => {
    return (
        <MaterialSelect
            value={ selectedValue }
            onChange={ onChange }
            input={ <Input name={ name } id={ id } /> }
            displayEmpty={ shouldRenderEmptyOption }
            { ...props }
        >
            { shouldRenderEmptyOption && renderEmptyOption(emptyOption) }
            { renderOptions({ options }) }
        </MaterialSelect>
    );
};

export default withStyles(styles)(Select);
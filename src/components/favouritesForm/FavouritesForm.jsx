import React from "react";
import PropTypes from "prop-types";
import Input from "components/formElements/input/Input";
import Select from "components/formElements/select/Select";
import Button from "components/formElements/button/Button";
import withLabel from "components/formElements/withLabel";
import style from "./style.scss";
import uuidv4 from "uuid/v4";

const InputWithLabel = withLabel(Input);
const SelectWithLabel = withLabel(Select);

const initialState = {
    repoOrDescription: {
        value: "",
        isValid: undefined
    },
    selectedLanguage: {
        value: "",
        isValid: undefined
    },
    isValid: false,
};

class FavouritesForm extends React.Component {

    state = initialState;

    isLanguageValueValid(value) {
        return !!value;
    }

    isRepoOrDescriptionValueValid(value) {
        return value.length > 0;
    }

    isFormValid({ repoOrDescription, selectedLanguage }) {
        return !!repoOrDescription.isValid && !!selectedLanguage.isValid;
    }

    reset() {
        this.setState(initialState);
    }

    onLanguageChange = (event) => {
        const value = event.target.value;
        const repoOrDescription = this.state.repoOrDescription;
        const selectedLanguage = {
            value,
            isValid: this.isLanguageValueValid(value)
        }

        this.setState({
            selectedLanguage,
            isValid: this.isFormValid({ repoOrDescription, selectedLanguage })
        });
    }

    onRepoOrDescriptionChange = (event) => {
        const value = event.target.value;
        const selectedLanguage = this.state.selectedLanguage;
        const repoOrDescription = {
            value,
            isValid: this.isRepoOrDescriptionValueValid(value)
        };

        this.setState({
            repoOrDescription,
            isValid: this.isFormValid({ repoOrDescription, selectedLanguage })
        });
    }

    onAddToListClick = () => {
        const { repoOrDescription, selectedLanguage, isValid } = this.state;
        const { onSubmit } = this.props;

        if (isValid, onSubmit) {
            onSubmit({
                id: uuidv4(),
                repoOrDescription: repoOrDescription.value,
                language: selectedLanguage.value
            });
            this.reset();
        }
    }

    render() {
        const { repoOrDescription, selectedLanguage, isValid } = this.state;
        const { languageOptions } = this.props;

        return (
            <div>
                <InputWithLabel
                    { ...{
                        withLabelClassName: style.formItem,
                        label: "Repo name or description",
                        ...( repoOrDescription.isValid !== undefined ? { error: !repoOrDescription.isValid } : {} ),
                        value: repoOrDescription.value,
                        onChange: this.onRepoOrDescriptionChange,
                    } }
                />
                <SelectWithLabel
                    { ...{
                        withLabelClassName: style.formItem,
                        id: "languages", 
                        name: "languages",
                        label: "Language",
                        ...( selectedLanguage.isValid !== undefined ? { error: !selectedLanguage.isValid } : {} ),
                        selectedValue: selectedLanguage.value,
                        options: languageOptions,
                        onChange: this.onLanguageChange,
                        autoWidth: true
                    } }  
                />
                <div className={ style.buttonsWrapper }>
                    <Button
                        { ...{
                            disabled: !isValid,
                            onClick:  this.onAddToListClick
                        } }
                    >
                        Add To List
                    </Button>
                </div>
            </div>
        ); 
    }
}

FavouritesForm.propTypes = {
    languageOptions: PropTypes.array,
    onSubmit: PropTypes.func.isRequired
}

export default FavouritesForm;
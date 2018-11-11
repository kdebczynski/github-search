import React from "react";
import Input from "components/formElements/input/Input";
import Select from "components/formElements/select/Select";
import Button from "components/formElements/button/Button";
import withLabel from "components/formElements/withLabel";

const InputWithLabel = withLabel(Input, { label: "Repo name or description" });
const SelectWithLabel = withLabel(Select, { label: "Language" });

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

    onAddToListClick = (event) => {
        const { repoOrDescription, selectedLanguage, isValid } = this.state;
        const { onSubmit } = this.props;

        if (isValid, onSubmit) {
            onSubmit({
                repoOrDescription: repoOrDescription.value,
                selectedLanguage: selectedLanguage.value
            });
            this.reset();
        }
    }

    render() {
        const { repoOrDescription, selectedLanguage, isValid } = this.state;
        const { options } = this.props;

        return (
            <div>
                <InputWithLabel
                    { ...{
                        defaultValue: repoOrDescription.value,
                        value: repoOrDescription.value,
                        onChange: this.onRepoOrDescriptionChange,
                        ...( repoOrDescription.isValid !== undefined ? { error: !repoOrDescription.isValid } : {} )
                    } }
                />
                <SelectWithLabel 
                    { ...{
                        id: "languages", 
                        name: "languages",
                        ...( selectedLanguage.isValid !== undefined ? { error: !selectedLanguage.isValid } : {} ),
                        selectedValue: selectedLanguage.value,
                        options,
                        onChange: this.onLanguageChange,
                        autoWidth: true
                    } }  
                />
                <Button
                    { ...{
                        disabled: !isValid,
                        onClick:  this.onAddToListClick
                    } }
                >
                    Add To List
                </Button>
            </div>
        ); 
    }
}

export default FavouritesForm;
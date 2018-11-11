import React from "react";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import Content from "components/content/Content";
import Input from "components/forms/input/Input";
import Select from "components/forms/select/Select";
import languages from "data/languages";
import withLabel from "components/forms/withLabel";

const options = Object.keys(languages).map(langKey => ({
    value: langKey,
    name: languages[langKey]
}));

const onChange = (event) => {
    console.log("onChange", event.target.name, event.target.value);
};

const InputWithLabel = withLabel(Input, { label: "Repo name or description" });
const SelectWithLabel = withLabel(Select, { label: "Language" });

const Main = ({ repoOrDescriptionValue = "", selectedLanguageValue = "" } = {}) => {

    return (
        <div>
            <Header
                title="Search Favoutites"
            />
            <Content>
                <InputWithLabel
                    { ...{
                        defaultValue: repoOrDescriptionValue
                    } }
                />
                <SelectWithLabel 
                    { ...{ 
                        id: "languages", 
                        name: "languages",
                        selectedValue: selectedLanguageValue,
                        options,
                        onChange,
                        autoWidth: true
                    } }  
                />
            </Content>
        </div>
    );
};

export default Main;
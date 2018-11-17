import React from "react";
import PropTypes from "prop-types";
import Chip from '@material-ui/core/Chip';
import style from "./style.scss";

const languagesToArray = (languages) => {
    const languagesArray = [];

    Object.keys(languages).forEach(langKey => {
        languagesArray.push({
            key: langKey,
            value: languages[langKey]
        })
    });

    return languagesArray;
}

const mapToPercentageValues = (languages = []) => {
    let sum = 0;

    languages.forEach(lang => sum += lang.value);

    return languages.map(lang => ({
        ...lang,
        value: parseFloat(lang.value / sum * 100).toFixed(2)
    }));
}

const RepositoryLanguages = ({ repositoryLanguagesItem }) => {
    const languages = repositoryLanguagesItem.languages;
    const repoId = repositoryLanguagesItem.repoId;

    return (
        <div>
            { mapToPercentageValues(languagesToArray(languages)).map(lang => (
                <Chip
                    className={ style.language }
                    key={ `${lang.key}-${lang.value}-${repoId}` }
                    label={ `${lang.key} ${lang.value}%` }
                    color="secondary"
                />
            )) }
        </div>
    );
};

RepositoryLanguages.propTypes = {
    repositoryLanguagesItem: PropTypes.object
};

export default RepositoryLanguages;
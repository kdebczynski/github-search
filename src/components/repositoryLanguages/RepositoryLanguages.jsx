import React from "react";
import Chip from '@material-ui/core/Chip';

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

const RepositoryLanguages = ({ repositoryLanguagesItem }) => {
    const languages = repositoryLanguagesItem.languages;
    const repoId = repositoryLanguagesItem.repoId;

    return (
        <div>
            { languagesToArray(languages).map(lang => (
                <Chip
                    key={ `${lang.key}-${lang.value}-${repoId}` }
                    label={ `${lang.key} ${lang.value}` }
                    color="primary"
                />
            )) }
        </div>
    );
};

export default RepositoryLanguages;
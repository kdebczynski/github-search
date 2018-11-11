import React from "react";
import Header from "components/header/Header";
import Content from "components/content/Content";
import FavouritesForm from "components/favouritesForm/FavouritesForm";
import languages from "data/languages";

const options = Object.keys(languages).map(langKey => ({
    value: langKey,
    name: languages[langKey]
}));

const Main = ({ onFavouritesAdd }) => {
    return (
        <div>
            <Header title="Search Favoutites" />
            <Content>
                <FavouritesForm
                    { ...{
                        options,
                        onSubmit: onFavouritesAdd
                    } }
                />
            </Content>
        </div>
    );
};

export default Main;
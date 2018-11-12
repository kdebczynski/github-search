import React from "react";
import Header from "components/header/Header";
import Content from "components/content/Content";
import FavouritesForm from "components/favouritesForm/FavouritesForm";
import FavouritesList from "components/favourites/list/ListContainer";

const Main = ({ onFavouritesAdd, options = [] }) => {
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
            <FavouritesList />
        </div>
    );
};

export default Main;
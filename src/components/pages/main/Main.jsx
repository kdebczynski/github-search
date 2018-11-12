import React from "react";
import PropTypes from "prop-types";
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

Main.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string
    })),
    onFavouritesAdd: PropTypes.func
}

export default Main;
import React from "react";
import PropTypes from "prop-types";
import Header from "components/header/HeaderContainer";
import PageContent from "components/pageContent/PageContent";
import Card from "components/card/Card";
import FavouritesForm from "components/favouritesForm/FavouritesForm";
import FavouritesList from "components/favourites/list/ListContainer";

const Main = ({ onFavouritesAdd, options = [] }) => {
    return (
        <PageContent>
            <Header title="Search Favoutites" />
            <Card>
                <FavouritesForm
                    { ...{
                        options,
                        onSubmit: onFavouritesAdd
                    } }
                />
            </Card>
            <FavouritesList />
        </PageContent>
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
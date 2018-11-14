import React from "react";
import PropTypes from "prop-types";
import ListItem from "../listItem/ListItem";

const List = ({ favourites = [], onDeleteItemClick, onItemClick }) => {
    return (
        <div>
            { favourites.map(item => (
                <ListItem
                    key={ item.repoOrDescription + item.language }
                    favouritesItem={ item }
                    onItemClick={ onItemClick }
                    onDeleteClick={ onDeleteItemClick }
                />
            )) }
        </div>
    );
};

List.propTypes = {
    favourites: PropTypes.array,
    onDeleteItemClick: PropTypes.func,
    onItemClick: PropTypes.func
};

export default List;
import React from "react";
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

export default List;
import React from "react";
import ListItem from "../listItem/ListItem";

const List = ({ repositories = [], onItemClick, onShowMoreClick }) => {

    return (
        <div>
            { repositories && repositories.map(item => (
                <ListItem
                    key={ item.node_id }
                    repositoryItem={ item }
                    onItemClick= { onItemClick }
                    onShowMoreClick={ onShowMoreClick }
                />
            )) }
        </div>
    );
};

export default List;
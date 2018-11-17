import React from "react";
import ListItem from "../listItem/ListItem";

const getRepositoryLanguagesItemByRepoId = (repositoryLanguages, repoId) => {
    return repositoryLanguages.find(item => {
        return item.repoId === repoId;
    });
};

const List = ({ repositories = [], repositoryLanguages = [], onItemClick, onShowMoreClick }) => {

    return (
        <div>
            { repositories && repositories.map(item => (
                <ListItem
                    key={ item.node_id }
                    repositoryItem={ item }
                    repositoryLanguagesItem={
                        getRepositoryLanguagesItemByRepoId(repositoryLanguages, item.id)
                    }
                    onItemClick= { onItemClick }
                    onShowMoreClick={ onShowMoreClick }
                />
            )) }
        </div>
    );
};

export default List;
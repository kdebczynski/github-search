import React from "react";
import PropTypes from "prop-types";
import ListItem from "../listItem/ListItem";

const getRepositoryLanguagesItemByRepoId = (repositoryLanguages, repoId) => {
    return repositoryLanguages.find(item => item.repoId === repoId);
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

List.propTypes = {
    repositories: PropTypes.array,
    repositoryLanguages: PropTypes.array,
    onItemClick: PropTypes.func,
    onShowMoreClick: PropTypes.func
};

export default List;
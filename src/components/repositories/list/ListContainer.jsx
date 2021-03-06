import { connect } from "react-redux";
import List from "./List";
import { repositoryRedirect } from "redux/repositories/actions";
import { repositoryLanguagesFetchInitiated } from "redux/repositoryLanguages/actions";
import { getFilteredItemsByStargazersAndLastYear } from "redux/repositories/selectors";
import { getRepositoryLanguages } from "redux/repositoryLanguages/selectors";

const mapStateToProps = (state) => {
    return {
        repositories: getFilteredItemsByStargazersAndLastYear(state),
        repositoryLanguages: getRepositoryLanguages(state)
    };
};

const dispatchToProps = {
    onItemClick: repositoryRedirect,
    onShowMoreClick: repositoryLanguagesFetchInitiated
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(List);
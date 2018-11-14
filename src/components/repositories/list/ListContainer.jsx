import { connect } from "react-redux";
import List from "./List";
import { repositoryRedirect } from "redux/repositories/actions";
import { getFilteredItemsByStargazersAndLastYear } from "redux/repositories/selectors";

const mapStateToProps = (state) => {
    return {
        repositories: getFilteredItemsByStargazersAndLastYear(state)
    };
};

const dispatchToProps = {
    onItemClick: repositoryRedirect,
    onShowMoreClick: () => {}
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(List);
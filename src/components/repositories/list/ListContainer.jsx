import { connect } from "react-redux";
import List from "./List";
import { repositoryRedirect } from "redux/repositories/actions";
import { getFilteredItems, isUpdatedWithinLastYear, isStargazersCountAtLeast } from "redux/repositories/selectors";

const sortItemsByStargazersCountDesc = (a, b) => {
    if (a.stargazers_count > b.stargazers_count) {
        return -1;
    }

    if (a.stargazers_count < b.stargazers_count) {
        return 1;
    }

    return 0;
};

const mapStateToProps = (state) => {
    const repositories = getFilteredItems(state, (item) => (
        isUpdatedWithinLastYear(item) && isStargazersCountAtLeast(item, 10)
    ));

    repositories && repositories.sort(sortItemsByStargazersCountDesc);

    return { repositories };
};

const dispatchToProps = {
    onItemClick: repositoryRedirect,
    onShowMoreClick: () => {}
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(List);
import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import { repositoriesFetchInitiated } from "redux/repositories/actions";
import { isProcessing } from "redux/repositories/selectors";
import { getFilteredItemsByStargazersAndLastYear } from "redux/repositories/selectors";

const mapStateToProps = (state) => {
    const availableData = getFilteredItemsByStargazersAndLastYear(state) || [];

    return {
        isProcessing: isProcessing(state),
        areDataAvailable: !!availableData.length
    }
};

const dispatchToProps = {
    onSearchTriggered: repositoriesFetchInitiated
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(SearchResults);
import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import { repositoriesFetchInitiated, repositoriesFetchMoreInitiated } from "redux/repositories/actions";
import { isProcessing } from "redux/repositories/selectors";

const mapStateToProps = (state) => ({
    isProcessing: isProcessing(state)
});

const dispatchToProps = {
    onSearchTriggered: repositoriesFetchInitiated,
    onSearchMoreTriggered: repositoriesFetchMoreInitiated
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(SearchResults);
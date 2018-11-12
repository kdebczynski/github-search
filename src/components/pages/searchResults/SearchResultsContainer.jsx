import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import { repositoriesFetchInitiated } from "redux/repositories/actions";

const mapStateToProps = (state) => ({
    
});

const dispatchToProps = {
    onComponentDidMount: (criteria) => repositoriesFetchInitiated(criteria)
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(SearchResults);
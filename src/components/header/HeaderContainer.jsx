import { connect } from "react-redux";
import Header from "./Header";
import { isProcessing } from "redux/repositories/selectors";

const mapStateToProps = (state) => {
    return {
        isProcessing: isProcessing(state)
    }
};

const dispatchToProps = {};

export default connect(
    mapStateToProps,
    dispatchToProps
)(Header);
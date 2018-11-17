import { connect } from "react-redux";
import Header from "./Header";
import { isProcessing as isRepositoriesProcessing } from "redux/repositories/selectors";
import { isProcessing as isRepositoryLanguagesProcessing } from "redux/repositoryLanguages/selectors";

const mapStateToProps = (state) => {
    return {
        isProcessing: isRepositoriesProcessing(state) || isRepositoryLanguagesProcessing(state)
    }
};

const dispatchToProps = {};

export default connect(
    mapStateToProps,
    dispatchToProps
)(Header);
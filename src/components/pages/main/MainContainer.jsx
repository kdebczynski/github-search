import { connect } from "react-redux";
import Main from "./Main";
import { favouritesAdded } from "redux/favourites/actions";
import { getLanguages } from "redux/languages/selectors"

const mapStateToProps = (state) => ({
    options: getLanguages(state)
});

const dispatchToProps = {
    onFavouritesAdd: favouritesAdded
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(Main);
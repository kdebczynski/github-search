import { connect } from "react-redux";
import Main from "./Main";
import { favouritesAdded } from "redux/favourites/actions";

const mapStateToProps = (state) => ({
    options: state.languages
});

const dispatchToProps = {
    onFavouritesAdd: favouritesAdded
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(Main);
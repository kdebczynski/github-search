import { connect } from "react-redux";
import Main from "./Main";
import { favouritesAdded } from "redux/favourites/actions";

const dispatchToProps = {
    onFavouritesAdd: favouritesAdded
};

export default connect(
    null,
    dispatchToProps
)(Main);
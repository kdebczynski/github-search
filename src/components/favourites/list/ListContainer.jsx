import { connect } from "react-redux";
import List from "./List";
import { favouritesDeleted, favouritesSearch } from "redux/favourites/actions";
import { getAll as getAllFavourites } from "redux/favourites/selectors"

const mapStateToProps = (state) => ({
    favourites: getAllFavourites(state)
});

const dispatchToProps = {
    onItemClick: favouritesSearch,
    onDeleteItemClick: favouritesDeleted
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(List);
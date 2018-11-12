import { connect } from "react-redux";
import List from "./List";
import { favouritesDeleted, favouritesSearch } from "redux/favourites/actions";

const mapStateToProps = (state) => ({
    favourites: state.favourites
});

const dispatchToProps = {
    onItemClick: favouritesSearch,
    onDeleteItemClick: favouritesDeleted
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(List);
import React from "react";
import PropTypes from "prop-types";
import Card from "components/card/Card";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import Swipe from "react-easy-swipe";
import style from "./style.scss";

const stopPropagation = e => e.stopPropagation();

class ListItem extends React.Component {

    state = {
        isDeleteAreaShown: false
    }

    render() {
        const { favouritesItem, onDeleteClick, onItemClick } = this.props;
        const { isDeleteAreaShown } = this.state;

        return (
            <Swipe
                onSwipeLeft={ () => this.setState({ isDeleteAreaShown: true }) }
                onSwipeRight={ () => this.setState({ isDeleteAreaShown: false }) }
            >
                <Card
                    className={
                        [style.listItem, ...(isDeleteAreaShown ? [style.deleteAreaShown] : [])].join(" ")
                    }
                    onClick={ (e) => {
                        stopPropagation(e);
                        onItemClick(favouritesItem);
                    } }
                >
                    <div className={ style.listHeader }>
                        <Typography variant="h6" color="inherit">
                            { favouritesItem.repoOrDescription }
                        </Typography>
                    </div>
                    <div className={ style.listTools }>
                        <Chip
                            label={ favouritesItem.language }
                            color="primary"
                        />
                    </div>
                    <div
                        className={ style.deleteArea }
                        onClick={ (e) => {
                            stopPropagation(e);
                            onDeleteClick(favouritesItem);
                        } }    
                    >
                        <div className={ style.deleteButton }>
                            <DeleteIcon className={ style.deleteIcon } />
                            <div>
                                <Typography variant="subtitle1" className={ style.deleteLabel }>
                                    DELETE
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Card>
            </Swipe>
        );
    }
}

ListItem.propTypes = {
    favouritesItem: PropTypes.object,
    onDeleteClick: PropTypes.func,
    onItemClick: PropTypes.func
};

export default ListItem;
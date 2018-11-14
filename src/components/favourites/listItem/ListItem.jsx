import React from "react";
import PropTypes from "prop-types";
import Card from "components/card/Card";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import style from "./style.scss";

const stopPropagation = e => e.stopPropagation();

const ListItem = ({ favouritesItem, onDeleteClick, onItemClick }) => {
    return (
        <Card
            className={ style.listItem }
            onClick={ (e) => {
                stopPropagation(e);
                onItemClick(favouritesItem);
            } }
        >
            <div className={ style.listHeader }>
                <Typography variant="h6" color="inherit">
                    { favouritesItem.repoOrDescription }
                </Typography>
                <IconButton
                    aria-label="Delete"
                    onClick={ (e) => {
                        stopPropagation(e);
                        onDeleteClick(favouritesItem);
                    } }
                >
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className={ style.listTools }>
                <Chip
                    label={ favouritesItem.language }
                    color="primary"
                />
            </div>
        </Card>
    );
};

ListItem.propTypes = {
    favouritesItem: PropTypes.object,
    onDeleteClick: PropTypes.func,
    onItemClick: PropTypes.func
};

export default ListItem;
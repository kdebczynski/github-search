import React from "react";
import { Link } from "react-router-dom";
import Content from "components/content/Content";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import style from "./style.scss";

const stopPropagation = e => e.stopPropagation();

const ListItem = ({ favouritesItem, onDeleteClick, onItemClick }) => {
    return (
        <Content
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
        </Content>
    );
};

export default ListItem;
import React from "react";
import Card from "components/card/Card";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import style from "./style.scss";

const stopPropagation = e => e.stopPropagation();

const ListItem = ({ repositoryItem, onShowMoreClick, onItemClick }) => {
    return (
        <Card
            className={ style.listItem }
            onClick={ (e) => {
                stopPropagation(e);
                onItemClick(repositoryItem);
            } }
        >
            <div className={ style.listContent }>
                <Typography variant="h6" color="inherit">
                    { repositoryItem.name }
                </Typography>
                <Typography variant="body1" color="inherit">
                    { repositoryItem.description }
                </Typography>
            </div>
            <div>
                <Chip
                    label={ `${repositoryItem.stargazers_count} Stars` }
                    color="primary"
                />
                
            </div>
            <div className={ style.buttonsWrapper }>
                <IconButton
                    className={ style.expandButton }
                    aria-label="Delete"
                    onClick={ (e) => {
                        stopPropagation(e);
                        onShowMoreClick(repositoryItem);
                    } }
                >
                    <ExpandMore />
                </IconButton>
            </div>
        </Card>
    );
};

export default ListItem;
import React from "react";
import PropTypes from "prop-types";
import Card from "components/card/Card";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import RepositoryLanguages from "components/repositoryLanguages/RepositoryLanguages";
import style from "./style.scss";

const stopPropagation = e => e.stopPropagation();

class ListItem extends React.Component {

    state = {
        isExpanded: false
    };

    onExpandButtonClicked = (e) => {
        stopPropagation(e);
        this.setState({ isExpanded: true });
        this.props.onShowMoreClick(this.props.repositoryItem);
    }

    onCollapseButtonClicked = (e) => {
        stopPropagation(e);
        this.setState({ isExpanded: false });
    }

    onItemClicked = (e) => {
        stopPropagation(e);
        this.props.onItemClick(this.props.repositoryItem.html_url);
    }

    renderExpandButton() {
        return (
            <IconButton
                className={ style.expandButton }
                aria-label="Delete"
                onClick={ this.onExpandButtonClicked }
            >
                <ExpandMore />
            </IconButton>
        );
    }

    renderCollapseButton() {
        return (
            <IconButton
                className={ style.expandButton }
                aria-label="Delete"
                onClick={ this.onCollapseButtonClicked }
            >
                <ExpandLess />
            </IconButton>
        );
    }

    render() {
        const { repositoryItem, repositoryLanguagesItem } = this.props;

        return (
            <Card
                className={ style.listItem }
                onClick={ this.onItemClicked }
            >
                <div className={ style.listContent }>
                    <Typography variant="h6" color="inherit">
                        { repositoryItem.name }
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        { repositoryItem.description }
                    </Typography>
                </div>
                <div className={ style.stars }>
                    <Chip
                        label={ `${repositoryItem.stargazers_count} Stars` }
                        color="primary"
                    />
                </div>
                { repositoryLanguagesItem && this.state.isExpanded &&
                    <div className={ style.repositoryLanguages }>
                        <RepositoryLanguages
                            repositoryLanguagesItem={ repositoryLanguagesItem }
                        />
                    </div>
                }
                <div className={ style.buttonsWrapper }>
                    { this.state.isExpanded ? this.renderCollapseButton() : this.renderExpandButton() }
                </div>
            </Card>
        );
    }
}

ListItem.propsTypes = {
    repositoryItem: PropTypes.object,
    repositoryLanguagesItem: PropTypes.object,
    onShowMoreClick: PropTypes.func,
    onItemClick: PropTypes.func
}

export default ListItem;
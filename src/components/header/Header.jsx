import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinearProgress from '@material-ui/core/LinearProgress';
import style from "./style.scss";

const Header = ({ title, route, isProcessing }) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                { route &&
                    <NavLink to={ route }>
                        <IconButton>
                            <ArrowBackIcon className={ style.backIcon } />
                        </IconButton> 
                    </NavLink>
                }
                <Typography variant="h6" color="inherit">
                    { title }
                </Typography>
            </Toolbar>
            { isProcessing && <LinearProgress /> }
        </AppBar>
    );
};

export default Header;
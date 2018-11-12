import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import style from "./style.scss";

const Content = ({ children, ...props }) => {
    return (
        <Card className={ style.content } { ...props }>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    );
};

export default Content;
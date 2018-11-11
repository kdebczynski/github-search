import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from "./content.scss";

const Content = ({ children }) => {
    return (
        <Card className={ styles.content }>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    );
};

export default Content;
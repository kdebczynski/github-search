import React from "react";
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import style from "./style.scss";

const Card = ({ children, ...props }) => {
    return (
        <MaterialCard className={ style.card } { ...props }>
            <MaterialCardContent>
                { children }
            </MaterialCardContent>
        </MaterialCard>
    );
};

export default Card;
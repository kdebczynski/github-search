import React from "react";
import style from "./style.scss";

const PageContent = ({ children, ...props }) => {
    return (
        <div className={ style.content } { ...props }>
            { children }
        </div>
    );
};

export default PageContent;
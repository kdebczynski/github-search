import React from "react";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import Content from "components/content/Content";

const Main = () => {
    return (
        <div>
            <Header
                title="Search Favoutites"
            />
            <Content>
                <Link to="/results">Search results</Link>
            </Content>
        </div>
    );
};

export default Main;
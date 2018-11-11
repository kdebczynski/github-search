import React from "react";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import Content from "components/content/Content";

const SearchResults = () => {
    return (
        <div>
            <Header
                title="Search Results"
            />
            <Content>
                <Link to="/">Main</Link>
            </Content>
        </div>
    );
};

export default SearchResults;
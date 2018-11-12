import React from "react";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import Content from "components/content/Content";
import { routes } from "consts";

class SearchResults extends React.Component {

    componentDidMount() {
        const criteria = this.props.match.params.criteria;
        const encodedCriteria = JSON.parse(atob(criteria));
        
        this.props.onComponentDidMount({ criteria: encodedCriteria });
    }

    render() {
        return (
            <div>
                <Header
                    title="Search Results"
                    route={ routes.MAIN }
                />
                <Content>
                    
                </Content>
            </div>
        );
    }
};

export default SearchResults;
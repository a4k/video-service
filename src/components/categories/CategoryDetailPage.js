import React from "react";
import {withRouter} from "react-router-dom";
import NotFoundPage from "../common/NotFoundPage";

class CategoryDetailPage extends React.Component {
    render() {
        let match = this.props.match;
        if(!match.params.hasOwnProperty('categoryId') || match.params.categoryId < 1) {
            return (
                <NotFoundPage />
            )
        }
        let categoryId = match.params.categoryId;

        return <h3>Requested topic ID: {categoryId}</h3>;
    }
}

export default withRouter(CategoryDetailPage);

import React from "react";
import {withRouter} from "react-router-dom";
import NotFoundPage from "../common/NotFoundPage";

class TVDetailPage extends React.Component {
    render() {
        let match = this.props.match;
        if(!match.params.hasOwnProperty('tvId') || match.params.tvId < 1) {
            return (
                <NotFoundPage />
            )
        }
        let tvId = match.params.tvId;

        return <h3>Requested topic ID: {tvId}</h3>;
    }
}

export default withRouter(TVDetailPage);

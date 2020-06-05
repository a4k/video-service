import React from "react";
import {withRouter} from "react-router-dom";

class FilmDetailPage extends React.Component {
    render() {
        let match = this.props.match;
        let filmId = match.params.filmId;
        return <h3>Requested topic ID: {filmId}</h3>;
    }
}

export default withRouter(FilmDetailPage);

import React from "react";
import {Switch, Route, Link, withRouter} from "react-router-dom";
import FilmDetailPage from "./FilmDetailPage";
import VisibleHotFilmList from "../../containers/VisibleHotFilmList";
import VisibleCategoryFilmList from "../../containers/VisibleCategoryFilmList";

class FilmsPage extends React.Component {
    render() {
        let match = this.props.match;
        const categories = [];

        return (
            <div>
                <h2>Topics</h2>

                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${match.path}/:filmId`}>
                        <FilmDetailPage/>
                    </Route>
                    <Route path={match.path}>
                        <VisibleHotFilmList />
                        <VisibleCategoryFilmList />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(FilmsPage);

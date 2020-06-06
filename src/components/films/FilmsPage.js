import React from "react";
import {Switch, Route, Link, withRouter} from "react-router-dom";
import FilmDetailPage from "./FilmDetailPage";
import HotFilmsContainer from "../../containers/HotFilmsContainer";
import CategoryContainer from "../../containers/CategoryContainer";

class FilmsPage extends React.Component {
    render() {
        let match = this.props.match;

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
                        <HotFilmsContainer />
                        {/*<CategoryContainer />*/}
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(FilmsPage);

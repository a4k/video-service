import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import FilmDetailPage from "./FilmDetailPage";
import HotFilmsContainer from "../../containers/HotFilmsContainer";
import CategoryContainer from "../../containers/CategoryContainer";

class FilmsPage extends React.Component {
    render() {
        let match = this.props.match;

        return (
            <div className={'container'}>
                <Switch>
                    <Route path={`${match.path}/:filmId`}>
                        <FilmDetailPage/>
                    </Route>
                    <Route path={match.path}>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="/films">Фильмы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tv">Телеканалы</a>
                            </li>
                        </ul>
                        <HotFilmsContainer />
                        <CategoryContainer />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(FilmsPage);

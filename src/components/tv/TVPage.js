import React from "react";
import {Switch, Route, Link, withRouter, NavLink} from "react-router-dom";
import TVContainer from "../../containers/TVContainer";

class TVPage extends React.Component {
    render() {
        let match = this.props.match;

        return (
            <div className={'container'}>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/films">Фильмы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/tv">Телеканалы</a>
                    </li>
                </ul>
                <Switch>
                    <Route path={match.path}>
                        <TVContainer />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(TVPage);

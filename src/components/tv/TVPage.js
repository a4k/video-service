import React from "react";
import {Switch, Route, Link, withRouter} from "react-router-dom";
import TVDetailPage from "./TVDetailPage";
import TVContainer from "../../containers/TVContainer";

class TVPage extends React.Component {
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
                    <Route path={`${match.path}/:tvId`}>
                        <TVDetailPage/>
                    </Route>
                    <Route path={match.path}>
                        <TVContainer />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(TVPage);

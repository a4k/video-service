import React from "react";
import {Switch, Route, Link, withRouter} from "react-router-dom";
import VisibleCategoryFilmList from "../../containers/CategoryContainer";
import CategoryDetailPage from "./CategoryDetailPage";

class CategoriesPage extends React.Component {
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
                        <CategoryDetailPage/>
                    </Route>
                    <Route path={match.path}>
                        <VisibleCategoryFilmList />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(CategoriesPage);

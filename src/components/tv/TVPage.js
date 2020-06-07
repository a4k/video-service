import React from "react";
import {Switch, Route, Link, withRouter, NavLink} from "react-router-dom";
import TVContainer from "../../containers/TVContainer";

class TVPage extends React.Component {
    render() {
        let match = this.props.match;

        return (
            <div>
                <div className={'tabs'}>
                    <NavLink to={'/films'}>{'Фильмы'}</NavLink>
                    <NavLink to={'/tv'} isActive={() => {return true}}>{'Телеканалы'}</NavLink>
                </div>
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

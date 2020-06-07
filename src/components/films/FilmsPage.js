import React from "react";
import {Switch, Route, NavLink, withRouter} from "react-router-dom";
import FilmDetailPage from "./FilmDetailPage";
import HotFilmsContainer from "../../containers/HotFilmsContainer";
import CategoryContainer from "../../containers/CategoryContainer";
import PropTypes from "prop-types";

class FilmsPage extends React.Component {
    render() {
        let match = this.props.match;

        return (
            <div>
                <Switch>
                    <Route path={`${match.path}/:filmId`}>
                        <FilmDetailPage/>
                    </Route>
                    <Route path={match.path}>
                        <div className={'tabs'}>
                            <NavLink to={'/films'} isActive={() => {return true}}>{'Фильмы'}</NavLink>
                            <NavLink to={'/tv'}>{'Телеканалы'}</NavLink>
                        </div>
                        <HotFilmsContainer />
                        <CategoryContainer />
                    </Route>
                </Switch>
            </div>
        );
    }
}
FilmsPage.propTypes = {
    tabs: PropTypes.object.isRequired,
};

export default withRouter(FilmsPage);

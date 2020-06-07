import React from "react";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import * as filmActions from "../../actions/filmActions";
import CommentsContainer from "../../containers/CommentsContainer";

class FilmDetailPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            film: Object.assign({}, this.props.film),
        };
    }
    componentDidMount() {
        this.props.actions.loadFilms();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.film.id != nextProps.film.id) {
            this.setState({film: Object.assign({}, nextProps.film)});
        }
    }
    render() {
        const {film} = this.state;
        return (
            <div className={'detail-page'}>
                <div className="row detail">
                    <div className="col-sm-1">
                        <a href="/films" className="back-link"></a>
                    </div>
                    <div className="col-sm-4">
                        <img src={`/img/${film.image}`} className="detail-image"/>
                    </div>
                    <div className="col-sm detail-list">
                        <div className="row detail-row">
                            <div className="col-sm detail-row__title">Название:</div>
                            <div className="col-sm detail-row__value">{film.title}</div>
                        </div>
                        <div className="row detail-row">
                            <div className="col-sm detail-row__title">Страна:</div>
                            <div className="col-sm detail-row__value">{film.country}</div>
                        </div>
                        <div className="row detail-row">
                            <div className="col-sm detail-row__title">Жанр:</div>
                            <div className="col-sm detail-row__value">{film.category.title}</div>
                        </div>
                        <p>{film.content}</p>
                    </div>
                </div>
                <div className="comments-container">
                    <CommentsContainer filmId={film.id} />
                </div>
            </div>
        );
    }
}

FilmDetailPage.propTypes = {
    film: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

function getFilmById(films, id) {
    let film = films.find(film => film.id == id)
    return Object.assign({}, film)
}
const mapStateToProps = (state, ownProps) => {
    let film = {title: '', country: '', image: '', category: {title: ''}};
    const filmId = ownProps.match.params.filmId;
    if (filmId && state.films.length > 0) {
        film = getFilmById(state.films, filmId);
    }
    return {film: film}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetailPage));

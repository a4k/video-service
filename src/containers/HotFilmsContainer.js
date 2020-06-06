import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HotFilmList from '../components/films/HotFilmList'
import {loadFilms} from "../actions";


class HotFilmsContainer extends Component {
    render() {
        let {films} = this.props;

        return (
            <HotFilmList
                films={films}/>
        );
    }
}

HotFilmsContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
}

const mapStateToProps = (state) => {
    const {
        entities: {films}
    } = state;

    return {
        films,
    }

}

export default connect(
    mapStateToProps, {
        loadFilms
    }
)(HotFilmList)

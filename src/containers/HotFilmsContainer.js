import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HotFilmList from '../components/films/HotFilmList'

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
    films: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    const {films} = state;

    return {
        films,
    }
};

export default connect(
    mapStateToProps
)(HotFilmList)

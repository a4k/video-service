import React from 'react'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HotFilmList from '../components/films/HotFilmList'
import * as filmActions from '../actions/filmActions'

class HotFilmsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            films: this.props.films,
        };
    }
    componentDidMount() {
        this.props.actions.loadFilms();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({films: nextProps.films});
    }
    render() {
        return (
            <HotFilmList
                films={this.state.films}/>
        );
    }
}

HotFilmsContainer.propTypes = {
    films: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {films} = state;
    return {films}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotFilmsContainer)

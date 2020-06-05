import {connect} from 'react-redux'
import HotFilmList from '../components/films/HotFilmList'

const getVisibleFilms = (films, filter) => {
    return films
}

const mapStateToProps = state => ({
    films: getVisibleFilms(state.films, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotFilmList)

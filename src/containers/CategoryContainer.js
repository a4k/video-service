import {connect} from 'react-redux'
import CategoryList from '../components/categories/CategoryList'

const getVisibleFilms = (films, filter) => {
    return films
}

const mapStateToProps = state => ({
    categories: getVisibleFilms(state.categories, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)

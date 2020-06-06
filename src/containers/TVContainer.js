import {connect} from 'react-redux'
import TVList from "../components/tv/TVList";

const getVisibleTV = (tv, filter) => {
    return tv
}

const mapStateToProps = state => ({
    tv: getVisibleTV(state.tv, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TVList)

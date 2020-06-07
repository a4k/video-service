import React from 'react'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as commentActions from '../actions/commentActions'
import CommentList from "../components/comments/CommentList";

class CommentsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comments: this.props.comments,
            filmId: 0,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({comments: nextProps.comments});
        if(nextProps.filmId > 0 && !this.state.filmId) {
            this.setState({filmId: nextProps.filmId})
            this.props.actions.loadCommentsByFilmId(nextProps.filmId);

        }
    }
    render() {
        return (
            <CommentList
                comments={this.state.comments}/>
        );
    }
}

CommentsContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filmId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    const {comments} = state;
    return {comments}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer)

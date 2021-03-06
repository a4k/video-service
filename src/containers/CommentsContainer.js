import React from 'react'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as commentActions from '../actions/commentActions'
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";

class CommentsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comment: {content: '', film_id: 0, user_id: 1},
            comments: this.props.comments,
            saving: false,
            filmId: 0,
            user: Object.assign({}, this.props.user),
        };
        this.saveComment = this.saveComment.bind(this);
        this.updateCommentState = this.updateCommentState.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({comments: nextProps.comments, user: nextProps.user});
        if(nextProps.filmId > 0 && !this.state.filmId) {
            this.setState({filmId: nextProps.filmId})
            this.props.actions.loadCommentsByFilmId(nextProps.filmId);

        }
    }
    updateCommentState(event) {
        const field = event.target.name;
        const comment = this.state.comment;
        comment[field] = event.target.value;
        return this.setState({comment: comment});
    }
    saveComment(event) {
        event.preventDefault();
        let comment = this.state.comment;
        comment.film_id = this.state.filmId;
        comment.user_id = this.state.user.id;
        this.props.actions.createComment(comment).then((data) => {
        })
    }
    deleteComment(id) {
        this.props.actions.deleteComment(id).then((data) => {
        })
    }

    render() {
        return (
            <div>
                <div className="heading">
                    <h5>Комментарии</h5>
                </div>
                {this.state.user.id
                ? <CommentForm
                        comment={this.state.comment}
                        onSave={this.saveComment}
                        onChange={this.updateCommentState}/>
                : <div className={'comment-auth'}>Авторизуйтесь, для того чтобы написать комментарий</div>
                }

                <CommentList
                    onDelete={this.deleteComment}
                    userId={this.state.user.id}
                    comments={this.state.comments}/>
            </div>
        );
    }
}

CommentsContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    filmId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    const {comments, user} = state;
    return {comments, user}
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

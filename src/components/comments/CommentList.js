import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CommentListRow from './CommentListRow';

class CommentList extends Component {
    render() {
        let {comments} = this.props;
        return (
            <div className={'comments'}>
                <div className="comment-list">
                    {comments.map(comment =>
                        <CommentListRow key={comment.id} userId={this.props.userId} onDelete={this.props.onDelete} comment={comment}/>
                    )}
                </div>
            </div>
        );
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
};

export default CommentList;

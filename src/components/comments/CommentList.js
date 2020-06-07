import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CommentListRow from './CommentListRow';

class CommentList extends Component {
    render() {
        let {comments} = this.props;
        return (
            <div className={'comments'}>
                <div className="heading">
                    <h5>Комментарии</h5>
                </div>
                <div className="row comment-list">
                    {comments.map(comment =>
                        <CommentListRow key={comment.id} comment={comment}/>
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
};

export default CommentList;

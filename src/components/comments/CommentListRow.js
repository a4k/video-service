import React, {Component} from 'react';
import PropTypes from 'prop-types'
import $ from "jquery";

class CommentListRow extends Component {
    render() {
        let {comment, userId} = this.props;
        let username = '-';
        if(comment.user.hasOwnProperty('name')) {
            username = comment.user.name;
        }
        let canDelete = false;
        if(comment.user.id === userId) {
            canDelete = true;
        }
        return (
            <div className="row comment">
                <div className="col-sm-2"></div>
                <div className="col-sm comment-inner">
                    <div className="comment-user">{username}</div>
                    <div className="comment-body">{comment.content}</div>
                </div>
                <div className="col-sm-2">
                    {canDelete
                    ? <div className="button-delete" onClick={() => this.props.onDelete(comment.id)}></div>
                    : <div></div>
                    }

                </div>
            </div>
        );
    }
}

CommentListRow.propTypes = {
    comment: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
};

export default CommentListRow;

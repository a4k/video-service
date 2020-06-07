import React, {Component} from 'react';
import PropTypes from 'prop-types'
import $ from "jquery";

class CommentListRow extends Component {
    render() {
        let {comment} = this.props;
        let username = '-';
        if(comment.user.hasOwnProperty('name')) {
            username = comment.user.name;
        }
        return (
            <div className="row comment">
                <div className="col-sm-2"></div>
                <div className="col-sm comment-inner">
                    <div className="comment-user">{username}</div>
                    <div className="comment-body">{comment.content}</div>
                </div>
                <div className="col-sm-2">
                    <div className="button-delete" onClick={() => this.props.onDelete(comment.id)}></div>
                </div>
            </div>
        );
    }
}

CommentListRow.propTypes = {
    comment: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default CommentListRow;

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import $ from "jquery";

class CommentListRow extends Component {
    render() {
        let {comment} = this.props;
        return (
            <div className="row comment">
                <div className="col-sm-2"></div>
                <div className="col-sm">
                    <div className="comment-user">{comment.user.name}</div>
                    <div className="comment-body">{comment.content}</div>
                </div>
                <div className="col-sm-2">
                    <div className="button-delete"></div>
                </div>
            </div>
        );
    }
}

CommentListRow.propTypes = {
    comment: PropTypes.object.isRequired
};

export default CommentListRow;

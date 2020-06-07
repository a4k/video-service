import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from "prop-types";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'comment-form'}>
                <form>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm comment-form__text">

                            <TextInput
                                name="content"
                                label=""
                                placeholder={'Введите ваш комментарий..'}
                                value={this.props.comment.content}
                                onChange={this.props.onChange}/>
                        </div>
                        <div className="col-sm-2 row middle-xs">

                            <input
                                type="submit"
                                disabled={this.props.saving}
                                value={this.props.saving ? 'Публикация...' : 'Опубликовать'}
                                className="btn btn-primary"
                                onClick={this.props.onSave}/>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

CommentForm.propTypes = {
    comment: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default CommentForm;

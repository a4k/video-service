import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import * as userActions from '../../actions/userActions'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";

class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {
                username: '',
                password: '',
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
    }
    onSubmit(event) {
        event.preventDefault();
        let self = this;
        this.props.actions.loginUser(this.state.user).then((data) => {
            self.props.onGetUser(self.props.user);
            localStorage.setItem('user_id', self.props.user.id);
            self.props.onHide();
        })
    }
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Вход
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder={'Логин'}
                                   value={this.state.user.username} name={'username'} className="form-control"
                                   onChange={this.onChange}
                                   id="exampleInputEmail1" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder={'Пароль'}
                                   value={this.state.user.password} name={'password'}
                                   onChange={this.onChange}
                                   className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Запомнить</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    user: PropTypes.object.isRequired,
    onGetUser: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    const {user} = state;
    return {user}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal)

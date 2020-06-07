import React, {Component} from 'react';
import LoginModal from "../user/LoginModal";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as userActions from "../../actions/userActions";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            modalLoginShow: false,
            user: this.props.user,
            user_id: localStorage.getItem('user_id'),
            isEditName: false,
            name: '',
        };
        this.showLoginModal = this.showLoginModal.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.getUser = this.getUser.bind(this);
        this.onNameClick = this.onNameClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.saveName = this.saveName.bind(this);
    }
    componentDidMount() {
        if(this.state.user_id) {
            this.props.actions.getUserById(this.state.user_id)
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({user: nextProps.user});
    }

    showLoginModal(data) {
        this.setState({modalLoginShow: data})
    }
    getUser(data) {
        this.setState({user: data})
    }
    onLogout() {
        localStorage.clear();
        window.location.href = '/'
    }
    onNameClick() {
        this.setState({isEditName: true, name: this.state.user.name})
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    saveName(e) {
        this.setState({isEditName: false})
        const {user} = this.state;
        user.name = this.state.name;
        this.props.actions.updateUser(user).then((data) => {
        })
    }

    render() {
        const {user, modalLoginShow, isEditName} = this.state;
        let isLogin = false;
        if(user.hasOwnProperty('username') && user.username.length > 0) {
            isLogin = true;
        }
        return (
            <div className={'container'}>
                <header>
                    <div className="row">
                        <div className="col-sm start-xs">
                            <a href={'/'} className="logo"></a>
                        </div>
                        <div className="col-sm center-xs header-center">
                            <form className={'search'} id={'search'}>
                                <div className="row middle-xs">
                                    <div className="col-sm search-input__wrapper">
                                        <input type="text" className="form-control search-input"
                                               placeholder={'Поиск...'} id="title" name={'title'}/>
                                    </div>
                                    <div className="col-sm">
                                        <button type="submit" className="btn btn-link">Найти</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm end-xs">
                            {isLogin
                                ? <div className={'row user middle-xs'}>
                                    <div className="col-sm user-username">
                                        {isEditName
                                        ?<input autoFocus={'true'} placeholder={'Имя..'} type={'text'} name={'name'} value={this.state.name}
                                                onChange={this.onNameChange} onBlur={this.saveName} />
                                        :<div className="username-text" onClick={this.onNameClick}>{user.name}</div>
                                        }
                                    </div>
                                    <div className="col-sm user-btn">
                                        <button type="submit" onClick={this.onLogout} className="btn btn-link">Выйти</button>
                                    </div>
                                </div>
                                : <button type="button" className="btn btn-primary login-button"
                                        onClick={() => this.showLoginModal(true)}>Войти
                                </button>
                            }
                        </div>
                    </div>
                </header>

                <LoginModal show={modalLoginShow} onGetUser={this.getUser} onHide={() => this.showLoginModal(false)}/>
            </div>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
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
)(Header)

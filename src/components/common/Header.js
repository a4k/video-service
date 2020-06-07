import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
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
                        <button type="button" className="btn btn-primary login-button">Войти</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

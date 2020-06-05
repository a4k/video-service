import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="/films" activeClassName="active">Films</Link>
            {" | "}
            <Link to="/tv" activeClassName="active">TV</Link>
        </nav>
    );
};

export default Header;

import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not found page</h1>
            <div>You could go to home</div>
            <nav>
                <Link to="/" activeClassName="active">Home</Link>
            </nav>
        </div>
    );
};

export default NotFoundPage;

import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const HotFilmListRow = ({film}) => {
    return (
        <tr>
            <td><Link to={'/films/' + film.id}>{film.title}</Link></td>
        </tr>
    );
};

HotFilmListRow.propTypes = {
    film: PropTypes.object.isRequired
};

export default HotFilmListRow;

import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const CategoryFilmListRow = ({film}) => {
    return (
        <tr>
            <td><Link to={'/films/' + film.id}>{film.name}</Link></td>
        </tr>
    );
};

CategoryFilmListRow.propTypes = {
    film: PropTypes.object.isRequired
};

export default CategoryFilmListRow;

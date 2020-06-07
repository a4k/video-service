import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const CategoryListRow = ({category}) => {
    return (
        <tr>
            <td><Link to={'/categories/' + category.id}>{category.title}</Link></td>
        </tr>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryListRow;

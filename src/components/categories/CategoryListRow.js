import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const CategoryListRow = ({category}) => {
    return (
        <div className="col-sm-3">
            <div className={`card text-white category-${category.code}`}>
                <div className="card-gradient"></div>
                <div className="card-img"></div>
                <div className="card-img-overlay">
                        <h5 className="card-title"><a href={`/category/${category.id}`}>{category.title}</a></h5>
                    </div>
            </div>
        </div>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryListRow;

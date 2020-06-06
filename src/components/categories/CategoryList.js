import React from 'react';
import PropTypes from 'prop-types'
import CategoryListRow from './CategoryListRow';

const CategoryList = ({categories}) => {
    return (
        <div>
            <h1>Жанры</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(category =>
                    <CategoryListRow key={category.id} category={category} />
                )}
                </tbody>
            </table>
        </div>
    );
};

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryList;

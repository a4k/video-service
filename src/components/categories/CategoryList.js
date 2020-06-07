import React from 'react';
import PropTypes from 'prop-types'
import CategoryListRow from './CategoryListRow';

const CategoryList = ({categories}) => {
    return (
        <div className={'categories'}>
            <div className="heading">
                <h4>Жанры</h4>
            </div>
            <div className="row items">
                {categories.map(category =>
                    <CategoryListRow key={category.id} category={category} />
                )}
            </div>
        </div>
    );
};

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default CategoryList;

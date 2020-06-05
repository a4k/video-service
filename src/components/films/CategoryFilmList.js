import React from 'react';
import PropTypes from 'prop-types'
import CategoryFilmListRow from './CategoryFilmListRow';

const CategoryFilmList = ({categories}) => {
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
                {categories.map(film =>
                    <CategoryFilmListRow key={film.id} film={film} />
                )}
                </tbody>
            </table>
        </div>
    );
};

CategoryFilmList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryFilmList;

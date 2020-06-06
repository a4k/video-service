import React from 'react';
import PropTypes from 'prop-types'
import HotFilmListRow from './HotFilmListRow';

const HotFilmList = ({films}) => {
    return (
        <div>
            <h1>Новинки</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {films.map(film =>
                    <HotFilmListRow key={film.id} film={film} />
                )}
                </tbody>
            </table>
        </div>
    );
};

HotFilmList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default HotFilmList;

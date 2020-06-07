import React from 'react';
import PropTypes from 'prop-types'
import TVListRow from './TVListRow';

const TVList = ({tv}) => {
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
                {tv.map(item =>
                    <TVListRow key={item.id} item={item} />
                )}
                </tbody>
            </table>
        </div>
    );
};

TVList.propTypes = {
    tv: PropTypes.array.isRequired
};

export default TVList;

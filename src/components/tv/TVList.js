import React from 'react';
import PropTypes from 'prop-types'
import TVListRow from './TVListRow';

const TVList = ({tv}) => {
    return (
        <div className={'tv-list'}>
            {tv.map(item =>
                <TVListRow key={item.id} item={item} />
            )}
        </div>
    );
};

TVList.propTypes = {
    tv: PropTypes.array.isRequired
};

export default TVList;

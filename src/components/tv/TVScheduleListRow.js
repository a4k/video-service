import React from 'react';
import PropTypes from 'prop-types'

const TVScheduleListRow = ({item}) => {
    return (
        <div>
            <div className="time">{item.time}</div>
            <div className="title">{item.title}</div>
        </div>
    );
};

TVScheduleListRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default TVScheduleListRow;

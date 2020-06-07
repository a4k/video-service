import React from 'react';
import PropTypes from 'prop-types'

const TVScheduleListRow = ({item}) => {
    let activeClass = item.active ? 'active' : '';
    return (
        <div className={`row schedule-row ${activeClass}`}>
            <div className="col-sm schedule-time">
                {item.time}
            </div>
            <div className="col-sm schedule-title">{item.title}</div>
        </div>
    );
};

TVScheduleListRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default TVScheduleListRow;

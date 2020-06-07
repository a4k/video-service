import React from 'react';
import PropTypes from 'prop-types'
import TVScheduleListRow from "./TVScheduleListRow";

const TVScheduleList = ({schedule}) => {
    return (
        <div className="schedule">
            {schedule.map(item =>
                <TVScheduleListRow key={item.id} item={item} />
            )}
        </div>
    );
};

TVScheduleList.propTypes = {
    schedule: PropTypes.array.isRequired
};

export default TVScheduleList;

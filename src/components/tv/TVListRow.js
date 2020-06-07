import React from 'react';
import PropTypes from 'prop-types'
import TVScheduleList from "./TVScheduleList";

const TVListRow = ({item}) => {
    return (
        <div>
            <div className="title">{item.title}</div>
            <div className="schedule">
                <TVScheduleList schedule={item.schedule} />
            </div>
        </div>
    );
};

TVListRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default TVListRow;

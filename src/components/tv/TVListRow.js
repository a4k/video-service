import React from 'react';
import PropTypes from 'prop-types'
import TVScheduleList from "./TVScheduleList";

const TVListRow = ({item}) => {
    return (
        <div className={'row tv-row'}>
            <div className="col-sm-4 row center-xs middle-xs logo">
                <img src={`/img/${item.image}`} className="item-img"/>
            </div>
            <div className="col-sm">
                <div className="heading">
                    <h5 className={'item-title'}>{item.title}</h5>
                </div>
                <TVScheduleList schedule={item.schedule} />
            </div>
        </div>
    );
};

TVListRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default TVListRow;

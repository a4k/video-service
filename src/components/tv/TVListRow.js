import React from 'react';
import PropTypes from 'prop-types'

const TVListRow = ({tv_item}) => {
    return (
        <tr>
            <td>{tv_item.name}</td>
        </tr>
    );
};

TVListRow.propTypes = {
    tv_item: PropTypes.object.isRequired
};

export default TVListRow;

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import HotFilmListRow from './HotFilmListRow';

class HotFilmList extends Component {
    render() {
        let {films} = this.props;
        return (
            <div className={'hotfilms'}>
                <div className="heading">
                    <h4>🔥 Новинки</h4>
                </div>
                <div className="row items">
                    {films.map(film =>
                        <HotFilmListRow key={film.id} film={film}/>
                    )}
                </div>
            </div>
        );
    }
}

HotFilmList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default HotFilmList;

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import $ from "jquery";

class HotFilmListRow extends Component {
    componentDidMount() {

        $('.hotfilms').find('.card').each(function () {

            let cardWidth = $(this).width();
            $(this).find('.card-img-overlay').css({height: cardWidth * 370 / 280})
        })
    }
    render() {
        let {film} = this.props;
        return (
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-img">
                        <img src={`/img/${film.image}`} className="card-img-top"/>
                        <div className="card-img-overlay">
                            <p>{film.content}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><a href={`/films/${film.id}`}>{film.title}</a></h5>
                    </div>
                </div>
            </div>
        );
    }
}

HotFilmListRow.propTypes = {
    film: PropTypes.object.isRequired
};

export default HotFilmListRow;

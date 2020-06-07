import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import TVList from '../components/tv/TVList'
import PropTypes from "prop-types";
import * as tvActions from "../actions/tvActions";


class TVContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tv: this.props.tv,
        };
    }
    componentDidMount() {
        this.props.actions.loadTV();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({tv: nextProps.tv});
    }
    render() {
        return (
            <TVList
                tv={this.state.tv}/>
        );
    }
}

TVContainer.propTypes = {
    tv: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {tv} = state;
    return {tv}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tvActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TVContainer)

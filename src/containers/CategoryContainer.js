import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import CategoryList from '../components/categories/CategoryList'
import PropTypes from "prop-types";
import * as categoryActions from "../actions/categoryActions";


class CategoryContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            categories: this.props.categories,
        };
    }
    componentDidMount() {
        this.props.actions.loadCategories();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({categories: nextProps.categories});
    }
    render() {
        return (
            <CategoryList
                categories={this.state.categories}/>
        );
    }
}

CategoryContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {categories} = state;
    return {categories}
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)

import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => ({
    toursData: state.toursPage.toursData,
});

const SearchContainer = ({ toursData }) => {

    return <Search toursData={toursData}/>;
};

export default connect(mapStateToProps)(SearchContainer);
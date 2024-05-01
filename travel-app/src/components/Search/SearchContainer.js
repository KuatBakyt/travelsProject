import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const mapStateToProps = state => ({
    toursData: state.toursPage.toursData,
});

const SearchContainer = ({ toursData }) => {
    const navigate = useNavigate();

    const handleTourSelect = (tour) => {
        navigate(`/tour/${tour.id}`);
    };

    return <Search toursData={toursData} onTourSelect={handleTourSelect} />;
};

export default connect(mapStateToProps)(SearchContainer);
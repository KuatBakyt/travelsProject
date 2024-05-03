import React from 'react';
import { connect } from 'react-redux';
import Buttontour from './Buttontour';
import { addRequestAcCr, updateNewRequestTextAcCr } from '../../redux/requestsReducer';

const ButtonTourContainer = ({ toursData, ...props }) => {
    return <Buttontour {...props} toursData={toursData}  />;
};

const mapStateToProps = (state) => ({
    toursData: state.toursPage.toursData,
    requests: state.requestsPage.requests
});

let mapDispatchToProps = (dispatch) => {
    return {
        addRequest: () => {
        dispatch(addRequestAcCr());
      },
      updateNewRequestText: (newEmail, newName, newPhone, newPlace, newExplain) => {
        dispatch(updateNewRequestTextAcCr(newEmail,  newName, newPhone, newPlace, newExplain));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTourContainer)
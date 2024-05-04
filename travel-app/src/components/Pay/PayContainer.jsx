import React from 'react'
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthTedirect';
import Pay from './Pay';
import { deleteOrderAcCr } from '../../redux/toursReducer';

const PayContainer = ({ orders, ...props }) => {

  return <Pay {...props} orders={orders} />
}

let mapStateToProps = (state) => {
  return {
    orders: state.toursPage.orders,
    ...state
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      deleteOrder: (id) => {
          dispatch(deleteOrderAcCr(id));
      }
  }
}

let AuthRedirect = withAuthRedirect(PayContainer)
export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)
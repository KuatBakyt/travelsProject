import Registration from './Registration';
import { createUser } from '../../redux/usersReducer'
import { connect } from "react-redux";

const RegistrationContainer = (props) => {

  return <Registration {...props} />
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage
  }
}

export default connect(mapStateToProps, { createUser })(RegistrationContainer)
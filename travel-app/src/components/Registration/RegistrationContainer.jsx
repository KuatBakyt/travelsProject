import Registration from './Registration';
import { createUser } from '../../redux/usersReducer'
import { connect } from "react-redux";
import { getUsersSuper } from '../../redux/usersSelector';

const RegistrationContainer = (props) => {

  return <Registration {...props} />
}

let mapStateToProps = (state) => {
  return {
    usersPage: getUsersSuper(state)
  }
}

export default connect(mapStateToProps, { createUser })(RegistrationContainer)
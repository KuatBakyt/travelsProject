import { useEffect } from "react"
import Items from "./Items"
import { connect } from "react-redux"
import { addToOrdersAcCr, setToursAcCr, togglePreloaderActionCreater } from "../../redux/toursReducer"
import { getToursSuper } from "../../redux/toursSelector"

const ItemsContainer = ({ authUser, ...props }) => {

  useEffect(() => {
    props.togglePreloader(true)

    fetch("http://localhost:8080/toursData")
      .then((response) => {
        if (!response.ok) {
          throw new Error('error HTTP, status' + response.status)
        }
        return response.json();
      })
      .then((data) => {
        props.setTours(data);
        props.togglePreloader(false);
      })
      .catch((error) => {
        console.log(error('Error:', error));
      })
  }, [])


  return <Items {...props} authUser={authUser} />
}

let MapStateToProps = (state) => {
  let authUser = JSON.parse(localStorage.getItem("user"))
  return {
    toursPage: getToursSuper(state),
    authUser
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setTours: (toursData) => {
      dispatch(setToursAcCr(toursData));
    },
    addToOrder: (id) => {
      dispatch(addToOrdersAcCr(id));
    },
    togglePreloader: (status) => {
      dispatch(togglePreloaderActionCreater(status))
    }
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(ItemsContainer)
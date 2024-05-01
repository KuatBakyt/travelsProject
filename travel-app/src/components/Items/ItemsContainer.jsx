import { useEffect } from "react"
import Items from "./Items"
import { connect } from "react-redux"
import { addToOrdersAcCr, diselikeAcCr, likeAcCr, setToursAcCr } from "../../redux/toursReducer"


const ItemsContainer = ({authUser, ...props}) => {

  useEffect(() => {
    fetch("http://localhost:8080/toursData")
      .then((response) => {
        if (!response.ok) {
          throw new Error('error HTTP, status' + response.status)
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.setTours(data);
      })
      .catch((error) => {
        console.log(error('Error:', error));
      })
  }, [])


  return <Items {...props} authUser={authUser}/>
}

let MapStateToProps = (state) => {
  let authUser = JSON.parse(localStorage.getItem("user"))
  return {
    toursPage: state.toursPage,
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
    like: (id, authUser, tour) => {
      dispatch(likeAcCr(id, authUser, tour));
    },
    dislike: (id, authUser, tour) => {
      dispatch(diselikeAcCr(id, authUser, tour));
    }
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(ItemsContainer)
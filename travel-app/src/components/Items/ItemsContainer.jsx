import { useEffect } from "react"
import Items from "./Items"
import { connect } from "react-redux"
import { addToOrdersAcCr, setToursAcCr } from "../../redux/toursReducer"

const ItemsContainer = (props) => {

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


  return <Items {...props}/>
}

let MapStateToProps = (state) => {
  return {
    toursPage: state.toursPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setTours: (toursData) => {
      dispatch(setToursAcCr(toursData));
    },
    addToOrder: (id) => {
      dispatch(addToOrdersAcCr(id))
    }
    // follow: (id) => {
    //   dispatch(followAcCr(id));
    // },
    // unfollow: (id) => {
    //   dispatch(unfollowAcCr(id));
    // }
  }
}

export default connect(MapStateToProps, mapDispatchToProps)(ItemsContainer)
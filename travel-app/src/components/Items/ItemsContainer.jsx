import { useEffect } from "react"
import Items from "./Items"
import { connect } from "react-redux"
import { setToursAcCr } from "../../redux/toursReducer"
import withAuthRedirect from "../HOC/withAuthTedirect"

const ItemsContainer = (props) => {
    useEffect(()=>{
        fetch("http://localhost:8080/tours_Data")
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
    return <Items {...props} />
}

let MapStateToProps = (state) => {
    return {
        toursPage: state.toursPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTours: (tours_Data) =>{
            dispatch(setToursAcCr(tours_Data));
        }
    }
}

let AuthRedirect = withAuthRedirect(ItemsContainer)

 

export default connect(MapStateToProps, mapDispatchToProps)(AuthRedirect)
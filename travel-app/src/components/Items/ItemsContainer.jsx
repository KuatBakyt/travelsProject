import Items from "./Items"
import { connect } from "react-redux"


let MapStateToProps = (state) => {
    return {
        toursPage: state.toursPage
    }
}

const ItemsContainer = connect(MapStateToProps)(Items)

export default ItemsContainer
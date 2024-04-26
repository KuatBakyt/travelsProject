import { connect } from "react-redux";
import ItemDescription from "./ItemDescription";
import withAuthRedirect from "../../../HOC/withAuthTedirect"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDescriptionContainer = (props) => {
    const [ oneItem, setOneItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/toursData/${id}`)
            .then((response) => {

                if (!response.ok) {
                    throw new Error('error HTTP, status' + response.status)
                }

                return response.json();
               
            })
            .then((data) => {
                setOneItem(data)
            })
            .catch((error) => {
                console.log(error('Error:', error));
            })
    }, []);
    return <ItemDescription {...props} oneItem={oneItem}/>
}

let mapStateToProps = (state) => {
    return {
        toursPage: state.toursPage
    }
}


let AuthRedirect = withAuthRedirect(ItemDescriptionContainer)

export default connect(mapStateToProps,
    {
    }
)(AuthRedirect)
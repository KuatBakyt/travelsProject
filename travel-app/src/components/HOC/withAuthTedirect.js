import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let withAuthRedirect = (Component) => {

    let NewComponent = (props) => {
        let navigate = useNavigate();
        let authUser = JSON.parse(localStorage.getItem("user"))
        
        useEffect(() => {
            if(!authUser){
                navigate("/login")
            }
        }, [])
        console.log(authUser);
        return <Component {...props} authUser={authUser}/>
    };
    return NewComponent
}


export default withAuthRedirect;
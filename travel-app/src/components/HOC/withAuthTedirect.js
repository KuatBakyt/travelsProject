let withAuthRedirect = (Component) => {

    let NewComponent = (props) => {
        
        return <Component {...props} />
    };
    return NewComponent
}


export default withAuthRedirect;
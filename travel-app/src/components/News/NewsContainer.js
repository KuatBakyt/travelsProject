import { useEffect } from "react";
import withAuthRedirect from "../HOC/withAuthTedirect";
import { connect } from "react-redux";
import News from "./News";
import { setNewsActionCreator, togglePreloaderActionCreater } from "../../redux/newsReducer";


const NewsContainer = (props) => {
    useEffect(() => {

        props.togglePreloader(true)

        fetch("http://localhost:8080/news_Data")
          .then((response) => {
    
            if (!response.ok) {
              throw new Error('error HTTP, status' + response.status)
            }
            return response.json();
          })
          .then((data) => {
           props.setNews(data);
           props.togglePreloader(false);
          })
          .catch((error) => {
            console.log(error('Error:', error));
          })
      }, []);

      return <News {...props} />
}

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news_Data) =>{
            dispatch(setNewsActionCreator(news_Data));
        },
        togglePreloader: (status) => {
            dispatch(togglePreloaderActionCreater(status))
        }
    }
}

let AuthRedirect = withAuthRedirect(NewsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import News from "./News";
import { setNewsActionCreator, togglePreloaderActionCreater } from "../../redux/newsReducer";
import { getNewsSuper } from "../../redux/newsSelector";


const NewsContainer = ({...props}) => {
    let dataArr = props.newsPage.news_Data
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = dataArr.slice(firstIndex, lastIndex)
    const npage = Math.ceil(dataArr.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    let prePage = () => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1)
        }
      }
    
      let changeCPage = (id) => {
        setCurrentPage(id)
      }
    
      let nextPage = () => {
        if (currentPage !== npage) {
          setCurrentPage(currentPage + 1)
        }
      }


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

      return <News {...props}  prePage={prePage} changeCPage={changeCPage} nextPage={nextPage} numbers={numbers} records={records} currentPage={currentPage}/>
}

let mapStateToProps = (state) => {
    return {
        newsPage: getNewsSuper(state),
        ...state
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
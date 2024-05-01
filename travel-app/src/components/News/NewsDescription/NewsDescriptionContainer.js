import { connect } from "react-redux";
import NewsDescription from "./NewsDescription";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const NewsDescriptionContainer = (props) => {
    const [ oneNews, setOneNews] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/news_Data/${id}`)
            .then((response) => {

                if (!response.ok) {
                    throw new Error('error HTTP, status' + response.status)
                }

                return response.json();
               
            })
            .then((data) => {
                setOneNews(data)
            })
            .catch((error) => {
                console.log('Error:', error);
            })
    }, []);
    return <NewsDescription {...props} oneNews={oneNews}/>
}

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

export default connect(mapStateToProps)(NewsDescriptionContainer)
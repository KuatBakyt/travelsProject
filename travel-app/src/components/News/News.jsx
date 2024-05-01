import React from 'react';
import "../../allcss/news.css";
import { useNavigate } from 'react-router-dom';
import PreLoader from '../Preloader/Preloader';

function News(props) {

  const navigate = useNavigate()
  
  function newsGoDescription(id){
    navigate(`/NewsDescription/${id}`) 
  }

  return (
    <div className="news">
      {
         props.newsPage.isLoad ? <PreLoader/>
         :
         (<div>
            <h1>Новости</h1>
            <div className="news-content">
              {props.newsPage.news_Data.map((newNews) => (
                <div className="news-item" key={newNews.id} >
                  <img src={newNews.img} alt="news" />
                  <h2>{newNews.title}</h2>
                  <p>{newNews.content}</p>
                  <p className="date">{newNews.date}</p>
                  <button onClick={() => {newsGoDescription(newNews.id)}}>Подробнее</button>
                </div>
              ))}
            </div>
        </div>)
      }
      
    </div>
  );
}

export default News;
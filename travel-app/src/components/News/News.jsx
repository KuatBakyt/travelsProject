import React from 'react';
import "../../allcss/news.css";
import { Link, useNavigate } from 'react-router-dom';
import PreLoader from '../Preloader/Preloader';
import { FaArrowLeftLong } from "react-icons/fa6";

function News({ ...props }) {

  const navigate = useNavigate()

  function newsGoDescription(id) {
    navigate(`/NewsDescription/${id}`)
  }

  return (
    <div className="news">
      <div className='btn-back' onClick={() => navigate(-1)}>
      <FaArrowLeftLong size={30}/>
      </div>
      {
        props.newsPage.isLoad ? <PreLoader />
          :
          (<div>
            <h1>Новости</h1>
            <div className="news-content">
              {props.records.map((newNews) => (
                <div className="news-item" key={newNews.id} >
                  <img src={newNews.img} alt="news" />
                  <h2>{newNews.title}</h2>
                  <p>{newNews.content}</p>
                  <p className="date">{newNews.date}</p>
                  <button onClick={() => { newsGoDescription(newNews.id) }}>Подробнее</button>
                </div>
              ))}
              <ul className='pagination'>
                <li className='page-item'>
                  <Link className='page-link' onClick={props.prePage}>Prev</Link>
                </li>
                {
                  props.numbers.map((n, i) => (
                    <li className={`page-item${props.currentPage === n ? 'active' : ''}`} key={i}>
                      <Link className='page-link'
                        onClick={() => props.changeCPage(n)}>{n}</Link>
                    </li>
                  ))
                }
                <li className='page-item'>
                  <Link className='page-link' onClick={props.nextPage}>Next</Link>
                </li>
              </ul>
            </div>
          </div>)
      }

    </div>
  );
}

export default News;
import React from 'react'
import "../../../allcss/newsdescription.css"
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

function NewsDescription(props) {
    let navigate = useNavigate()

    return (
        <div className='news-description'>
            <div className='btn-back' onClick={() => navigate(-1)}>
                < FaArrowLeftLong size={30}/>
            </div>
            <div className='container'>
                <div className='news-wrapper'>
                    <div className='news-head'>
                        <img src={props.oneNews.img} alt="" />
                    </div>
                    <div className='news-content-text'>
                        <h2>{props.oneNews.title}</h2>
                        <p>{props.oneNews.content}</p>
                        <p>{props.oneNews.info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDescription
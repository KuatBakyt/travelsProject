import React from 'react'
import "../../../allcss/newsdescription.css"

function NewsDescription(props) {

    return (
        <div className='news-description'>
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
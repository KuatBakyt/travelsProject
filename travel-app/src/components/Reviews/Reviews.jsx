import '../../allcss/reviews.css';
import React from "react";
import { IoStar } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


let Reviews = () => {

    let reviews = [
        {
            id: 1,
            user: "Михаил",
            review: "Лучший сайт!!!"
        },
        {
            id: 2,
            user: "Дмитрий",
            review: "Спасибо менеджеру за качественную работу"
        },
        {
            id: 3,
            user: "Асель",
            review: "Отличная компания! Все для клиента!"
        },
        {
            id: 4,
            user: "Ксенья",
            review: "Великолепный город! Лучшая компания!"
        }
    ]


    return (
        <div className="Reviews">
            <div className="formReview">
                <h2>Отзывы наших клиентов</h2>
            </div>
            <div className="container" >
                <div className='mini-review'>
                    {
                        reviews.map((newRew) => (

                            <div className="review-block" key={newRew.id}>
                                <div className="review-top">
                                    <div className="review-profile">
                                        <div className="review-img">
                                            <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" />
                                        </div>
                                        <div className="review-username">
                                            <strong>{newRew.user}</strong>
                                        </div>
                                    </div>

                                    <div className="review-reviews">
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                    </div>

                                </div>

                                <div className="review-comment">
                                    <p> {newRew.review} </p>
                                </div>

                            </div>

                        ))
                    }
                </div>

            </div>
        </div>

    );
}

export default Reviews;
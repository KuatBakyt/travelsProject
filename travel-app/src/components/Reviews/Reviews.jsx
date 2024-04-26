import '../../allcss/reviews.css';
import React from "react";
import { CiStar } from "react-icons/ci";


let Reviews = () => {

    let reviews = [
            {
                id: 1,
                user: "",
                review:"Лучший сайт!!!"
            },
            {
                id: 2,
                user: "",
                review:"Спасибо менеджеру за качественную работу"
            },
            {
                id: 3,
                user: "",
                review:"Отличная компания! Все для клиента!"
            }
    ]

    
    return (
        <div className="Reviews">
                <div className="formReview">
                    <p>Отзывы наших клиентов</p>
                </div>
                {
                    reviews.map((newRew) =>(
                        <div className="review-container" key={newRew.id}>
                            <div className="review-block">
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
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                    </div>
                                    
                                </div>
                                
                                <div className="review-comment">
                                    <p> {newRew.review} </p>
                                </div>

                            </div>
                        </div>
                    ))
                }

                <div className='review-scrolldown'>
                    <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.38889 24.5945H30.6111V22.2522H7.38889V24.5945ZM7.38889 17.5675H30.6111V15.2252H7.38889V17.5675ZM7.38889 10.5405H30.6111V8.19816H7.38889V10.5405ZM3.40944 32.7926C2.43833 32.7926 1.62767 32.4319 0.977445 31.7105C0.327222 30.9891 0.00140741 30.0888 0 29.0098V3.78287C0 2.70539 0.325815 1.80594 0.977445 1.0845C1.62907 0.363062 2.43974 0.00156155 3.40944 0H34.5906C35.5617 0 36.3723 0.3615 37.0226 1.0845C37.6728 1.8075 37.9986 2.70695 38 3.78287V40L31.5041 32.7926H3.40944Z" fill="black"/>
                    </svg>
                    <p>Посмотреть все отзывы</p>
                </div>
        </div>
    );
}

export default Reviews;
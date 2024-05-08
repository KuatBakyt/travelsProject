import React from "react";
import '../../allcss/slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

let SliderTour = () => {

    let tours = [
        {
            img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
            id: 1
        },
        {
            img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
            id: 2
        },
        {
            img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
            id: 3
        },
        {
            img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
            id: 4
        },
        {
            img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
            id: 5
        },
        {
            img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
            id: 6
        },
        {
            img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
            id: 7
        },
        {
            img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
            id: 8
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
    };

    return (

        <div className="Skidka">
            <div className="container">
                <div className="Skidka-wrap">
                    <Slider {...settings}>
                        {tours.map((d) => (
                            <div className="skidka-block" key={d.id}>
                                <img src={d.img} alt="" className="skidka-img-center" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default SliderTour;
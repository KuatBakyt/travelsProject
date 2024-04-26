import React from "react";
import '../../allcss/slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

let SliderTour = () => {

    let tours = [
        {
            name: "Экскурсия по городу Алматы и урочищу Медео",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 7000,
            discount: -15,
            img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
            id: 1
        },
        {
            name: "Озеро Иссык и водопад Медвежий",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 5000,
            discount: -20,
            img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
            id: 2
        },
        {
            name: "Медеу-Чимбулак-Талгар: знакомимся с горами Алма-Аты в мини-группе",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 6000,
            discount: -10,
            img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
            id: 3
        },
        {
            name: "Озеро Иссык с горами Алма-Аты в мини-группе",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 6000,
            discount: -15,
            img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
            id: 4
        },
        {
            name: "Экскурсия по городу Алматы и урочищу Медео",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 7000,
            discount: -15,
            img: "https://morena.kz/foto/allfoto/tshan/tsh37.jpg",
            id: 5
        },
        {
            name: "Озеро Иссык и водопад Медвежий",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 5000,
            discount: -20,
            img: "https://www.advantour.com/img/kazakhstan/tours/almaty-medeo-tour.jpg",
            id: 6
        },
        {
            name: "Медеу-Чимбулак-Талгар: знакомимся с горами Алма-Аты в мини-группе",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 6000,
            discount: -10,
            img: "https://ticketon.kz/media/upload/42873u54364_photo_341626.jpeg",
            id: 7
        },
        {
            name: "Озеро Иссык с горами Алма-Аты в мини-группе",
            city: "Алматы",
            kind: "Частный тур",
            time: "12 часов",
            price: 6000,
            discount: -15,
            img: "https://www.advantour.com/img/kazakhstan/tours/lake-issyk-tour.jpg",
            id: 8
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="Skidka">
            <div className="Skidka-wrap">
                <Slider {...settings}>
                {tours.map((d) => (
                    <div className="skidka-block" key={d.id}>
                        <div className="skidka-img">
                            <img src={d.img} alt="" className="skidka-img-center"/>
                        </div>
                        <div className="skidka-info">
                            <p className="skidka-name">{d.name} </p>
                            <p>{d.kind}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderTour;
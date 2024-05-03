import React from 'react'
import "../../../../allcss/itemdescription.css"
import { BsPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

function ItemDescription(props) {
    let addToOrder = () => {
        props.addToOrder(props.oneItem.id)
    }
    return (
        <div className='item-description'>
            <div className='bg-description'>
                <img src={props.oneItem.img} alt="" />
                <div className='container'>
                    <div className='description-head'>
                        <img src={props.oneItem.img} alt="" />
                        <div className='description-info'>
                            <div className='description-btn' onClick={addToOrder}>
                                Добавить в корзину
                            </div>
                            <div className='description-info-details'>
                                <div><BsPeopleFill size={35} /> <h3>{props.oneItem.kind}</h3></div>
                                <div><FaLocationDot size={35} /> <h3>{props.oneItem.city}</h3></div>
                                <div><FaClock size={35} /> <h3>{props.oneItem.time}</h3></div>
                            </div>
                            <div className='description-info-price'>
                                <h4>Скидка: {props.oneItem.discount}%</h4>
                                <b>от:</b>
                                <h2>{props.oneItem.price} T</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='description-info-text'>
                    <h2>{props.oneItem.name}</h2>
                    <p>{props.oneItem.description}</p>
                </div>

            </div>
        </div>
    )
}

export default ItemDescription
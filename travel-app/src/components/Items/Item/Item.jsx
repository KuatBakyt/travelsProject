import React from 'react'
import "../../../allcss/item.css"
import { IoIosStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

function Item(props) {
    const navigate = useNavigate()
    function redirectDescription() {
        navigate(`/ItemDescription/${props.id}`)
    }
    let addToOrder = () => {
        props.addToOrder(props.id)
    }

    return (
        <div className='item'>
            <div className='btndetail' onClick={redirectDescription}>
                Подробней
            </div>
            <div className='item-picture'>
                <img src={props.img} alt="" />
                <div className='count-stars'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                </div>
                <div className='discount'>
                    {props.discount}%
                </div>
            </div>

            <div className='animate-items'>

                <div><BiSolidLike /></div>
                <div><FaPlus /></div>

                <div onClick={addToOrder}><img src="../img/plus.png" alt="" /></div>
            </div>

            <div className='item-info'>

                <h3>{props.name}</h3>
                <div className='item-details'>
                    <div>
                        <div className='detail-item'><img src="../img/human.png" alt="" /><p>{props.kind}</p></div>
                        <div className='detail-item'><img src="../img/location.png" alt="" /><p>{props.city}</p></div>
                        <div className='detail-item'><img src="../img/clock.png" alt="" /><p>{props.time}</p></div>
                    </div>
                    <div className='item-price'>
                        от: <h4>{props.price} T</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item
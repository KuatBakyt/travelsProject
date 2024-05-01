import React from 'react'
import "../../../allcss/item.css"
import { IoIosStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

function Item({ authUser, ...props }) {
    const navigate = useNavigate()
    function redirectDescription() {
        navigate(`/ItemDescription/${props.id}`)
    }
    let addToOrder = () => {
        props.addToOrder(props.id)
    }

    let like = () => {
        props.like(props.id, authUser.email, props.tour)
    }

    let dislike = () => {
        props.dislike(props.id, authUser.email, props.tour)
    }
    return (
        <>
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

                    {
                        authUser
                            ? (<div>{
                                props.likespeople == authUser.email
                                    ? <span><BiSolidLike size={30} onClick={dislike}/></span>
                                    : <span><BiLike size={25} onClick={like} /></span>
                            }
                            </div>)
                            : <span></span>
                    }

                    <div><FaPlus size={25} className='icons-item' onClick={addToOrder} /></div>
                </div>

                <div className='item-info'>

                    <h3>{props.name}</h3>

                    <div className='item-details'>
                        <div>
                            <div className='detail-item'><img src="../img/human.png" alt="" /><p>{props.kind}</p></div>
                            <div className='detail-item'><img src="../img/location.png" alt="" /><p>{props.city}</p></div>
                            <div className='detail-item'><img src="../img/clock.png" alt="" /><p>{props.time}</p></div>
                            <div><p>{props.count}</p></div>
                        </div>
                        <div className='item-price'>
                            от: <h4>{props.price} T</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}


export default Item;
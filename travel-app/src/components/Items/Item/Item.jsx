import React, { useEffect, useState } from 'react'
import "../../../allcss/item.css"
import { IoIosStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

function Item(props) {
    const navigate = useNavigate()
    function redirectDescription() {
        navigate(`/ItemDescription/${props.id}`)
    }
    let addToOrder = () => {
        props.addToOrder(props.id)
    }

    const [like, setLike] = useState(false)
  
    let handleLikes = () => {
      if (!like) {
        setLike(true)
      } else {
        setLike(false)
      }
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
                        {/* likes : {count} */}
                    </div>
                </div>

                <div className='animate-items'>
                    <div>
                    {
                        like
                        ?  <span><BiSolidLike size={30} className='activelike' onClick={handleLikes} /></span>
                        :  <span><BiLike  size={25}  className='disactivelike' onClick={handleLikes} /></span>
                    }
                    </div> 
                    
                    {/* <div><BiSolidLike size={25} className='icons-item' /></div> */}
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
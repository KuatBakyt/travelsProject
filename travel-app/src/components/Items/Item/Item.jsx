import React from 'react'
import "../../../allcss/item.css"

function Item(props) {
    return (
        <div className='item'>

            <div className='item-picture'>
                <img src={props.img} alt="" />
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
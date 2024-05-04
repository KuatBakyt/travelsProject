import React from 'react'
import { FaTrash } from 'react-icons/fa'
import "../../../allcss/pay.css"

function PayOrder({...props}) {
    const deleteOrder = () => {
        props.deleteOrder(props.id)
      }
    return (
        <>
               <li className='pay-item'>
                <div className='pay-img'><img src={props.item.img} alt="" /></div>
                <div className='pay-name'>{props.item.name}</div>
                <div> <FaTrash className="delete_icon" size={30} onClick={deleteOrder}/></div>
               </li>
        </>
    )
}

export default PayOrder
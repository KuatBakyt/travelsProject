import React from 'react'
import "../../allcss/order.css"
import { FaTrash } from 'react-icons/fa'

function Order(props) {
  const deleteOrder = () => {
    props.deleteOrder(props.id)
  }
  return (
    <div className='order'>
      <img src={props.item.img} />
      <div> <h4>{props.item.name}</h4>
        <b>{props.item.price} T</b></div>
      <FaTrash className="delete_icon" onClick={deleteOrder} size={30}/>
    </div>
  )
}

export default Order
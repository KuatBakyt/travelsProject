import React from 'react'
import PayOrder from './PayOrder/PayOrder'
import "../../allcss/pay.css"

function Pay({ orders, ...props }) {

  let orderElements = orders.map(c => <PayOrder key={c.id} id={c.id} item={c} deleteOrder={props.deleteOrder} />)

  let sum = 0;
  orders.forEach(e => { sum += Number.parseFloat(e.price) })

  console.log(orders.length );
  return (
    <div className='container'>
      <div className='pay-content'>
        <ol className='pay-order'>
          {orderElements}
        </ol>

        <div className='pay-action'>
          <p className='sum m-3'>Сумма: {new Intl.NumberFormat().format(sum)} T </p>
          <h3>Оплата:</h3>
          <div className='pay-cards'>
            <div><img src="../img/visa.png" alt="" /></div>
            <div><img src="../img/alipay.png" alt="" /></div>
            <div><img src="../img/sber.png" alt="" /></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pay
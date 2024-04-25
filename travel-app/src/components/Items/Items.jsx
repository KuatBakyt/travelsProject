import React from 'react'
import Item from './Item/Item'
import "../../allcss/items.css"

function Items(props) {

    let itemElements = props.toursPage.tours_Data.map(e => <Item name={e.name} city={e.city} kind={e.kind} time={e.time} price={e.price} discount={e.discount} img={e.img} id={e.id} key={e.id}/>)
    return (
        <div className='items-content'>
            <div className='container'>
                <h2>Рекомендованные туры</h2>
                <div className='items'>
                {itemElements}
                </div>
            </div>
        </div>
    )
}

export default Items
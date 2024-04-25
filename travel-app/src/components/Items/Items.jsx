import React from 'react'
import Item from './Item/Item'
import "../../allcss/items.css"
import CategoriesContainer from '../Categories/CategoriesContainer'

function Items(props) {

    let itemElements = props.toursPage.currentTourse.map(e => <Item name={e.name} city={e.city} kind={e.kind} time={e.time} price={e.price} discount={e.discount} img={e.img} id={e.id} key={e.id}/>)
    return (
        <div className='items-content'>
            <div className='container'>
                <h2>Рекомендованные туры</h2>
                <CategoriesContainer />
                <div className='items'>
                {itemElements}
                </div>
            </div>
        </div>
    )
}

export default Items
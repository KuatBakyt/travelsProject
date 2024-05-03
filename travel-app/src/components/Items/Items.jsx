import React from 'react'
import Item from './Item/Item'
import "../../allcss/items.css"
import CategoriesContainer from '../Categories/CategoriesContainer'
import PreLoader from '../Preloader/Preloader'

function Items({ authUser, ...props }) {
    let itemElements = props.toursPage.currentTourse.map(tour => <Item tour={tour} name={tour.name} city={tour.city} kind={tour.kind} time={tour.time} price={tour.price} discount={tour.discount} img={tour.img} id={tour.id} key={tour.id} addToOrder={props.addToOrder} like={props.like} authUser={authUser} likespeople={tour.likespeople} dislike={props.dislike} />)
    return (
        <div className='items-content'>
            {
                props.toursPage.isLoad ? <PreLoader />
                    :
                    (<div className='container'>
                        <h2>Рекомендованные туры</h2>
                        <CategoriesContainer />
                        <div className='items'>
                            {itemElements}
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Items
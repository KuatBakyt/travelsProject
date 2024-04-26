import React, { useState } from 'react'
import '../../allcss/header.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import Order from '../Order/Order';

function Header(props) {
    const showOrders = (props) => {
        let sum = 0;
        props.toursPage.orders.forEach(e => { sum += Number.parseFloat(e.price) })
        return (

            <div className='order-menu'>
                {props.toursPage.orders.map(c => (
                    <Order deleteOrder={props.deleteOrder} key={c.id} item={c} id={c.id} />
                ))}
                 <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$ </p>
            </div>
        )
    }

    const showNothing = () => {
        return (
            <div className="empty">
                <h2>Пусто</h2>
            </div>
        )
    }

    let [cartOpen, setCartOpen] = useState(false)
    return (
        <div className='header-main'>
            <div className='container'>
                <header>
                    <div className='logo'>TRAVEL</div>
                    <ul className='navs'>
                        <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/" > Главная </NavLink>
                        <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/about" > О нас </NavLink>
                        <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/news" > Новости </NavLink>
                        <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/reviews" > Отзывы </NavLink>
                        <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/contacts" > Контакты </NavLink>
                    </ul>
                    <div className='basket-profile'>
                        <a href='tel: +7 747 620 28 79' className='phone'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a>
                        <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`basket  ${cartOpen && 'active'}`}>
                            <FaShoppingBasket
                                size={30} />
                            <i>0</i>
                        </div>
                        {
                            cartOpen && (
                                <div>
                                    {cartOpen && <div className='shop-menu'>
                                        {props.toursPage.orders.length > 0 ?
                                            showOrders(props) : showNothing()}
                                    </div>}
                                </div>
                            )
                        }
                        <div className='profile'>
                            <img src="../img/ava.png" alt="" />
                        </div>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default Header
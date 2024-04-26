import React from 'react'
import '../../allcss/header.css'
import { NavLink } from 'react-router-dom'

function Header() {
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
                        <div className='basket'>
                            <img src="../img/basket.png" alt="" />
                            <i>0</i>
                        </div>
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
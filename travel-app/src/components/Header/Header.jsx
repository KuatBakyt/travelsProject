import React, { useState } from 'react'
import '../../allcss/header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import Order from '../Order/Order';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header(props) {
    let navigate = useNavigate()
    let currentUser = JSON.parse(localStorage.getItem('user'))

    function redirectDescription() {
        navigate(`/pay`)
       
    }
    function redirectLogin() {
        navigate(`/login`)
        handleClose()
    }
    function redirectRegister() {
        navigate(`/register`)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showOrders = (props) => {
        let sum = 0;
        props.toursPage.orders.forEach(e => { sum += Number.parseFloat(e.price) })
        return (

            <div className='order-menu'>
                {props.toursPage.orders.map(c => (
                    <Order deleteOrder={props.deleteOrder} key={c.id} item={c} id={c.id} />
                ))}
                <div className='details-pay'>
                    <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)} T </p>
                    {
                        currentUser !== null
                            ? (
                                <div className='btn-next-pay' onClick={redirectDescription}>
                                    Перейти к оплате
                                </div>
                            )
                            :
                            <div className='btn-next-pay' onClick={handleShow}>
                                Перейти к оплате
                            </div>
                    }

                </div>

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
            <Navbar expand="lg" className="bg-white">
                <div className='container'>
                    <header className="d-flex justify-content-between w-100">
                        <div className='logo'>TRAVEL</div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav ">
                            <ul className='navs'>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/" > Главная </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/about" > О нас </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/news" > Новости </NavLink>
                                {
                                    currentUser !== null
                                        ? <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/reviews" > Отзывы </NavLink>
                                        : <span></span>
                                }

                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/contacts" > Контакты </NavLink>
                            </ul>
                            <div className='basket-profile'>
                                <a href='tel: +7 747 620 28 79' className='phone'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a>
                                <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`basket  ${cartOpen && 'active'}`}>
                                    <FaShoppingBasket
                                        size={30} />
                                    <i>{props.toursPage.orders.length}</i>
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

                                {
                                    currentUser != null ? (<NavLink to={"/profile"}><div className='profile'><img src={currentUser.urlImg} alt="" /></div></NavLink>)
                                        :
                                        (<NavDropdown title="Логин" id="basic-nav-dropdown">
                                            <NavDropdown.Item onClick={redirectLogin}>Логин</NavDropdown.Item>
                                            <NavDropdown.Item onClick={redirectRegister}>Регистрация</NavDropdown.Item>
                                        </NavDropdown>)
                                }

                            </div>

                        </Navbar.Collapse>
                    </header>
                </div>
            </Navbar >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Внимание</Modal.Title>
                </Modal.Header>
                <Modal.Body>Зайдите в аккаунт, чтобы перейти к оплате </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={redirectLogin}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Header
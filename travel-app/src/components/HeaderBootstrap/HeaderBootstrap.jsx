import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../allcss/header.css'
import { NavLink } from 'react-router-dom';

function HeaderBootstrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                    <Navbar.Brand href="#home" className='logo'>TRAVEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      
                            <ul className='navs'>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/" > Главная </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/about" > О нас </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/news" > Новости </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/reviews" > Отзывы </NavLink>
                                <NavLink className={(navlink) => navlink.isActive ? 'active' : 'inactive'} to="/contacts" > Контакты </NavLink>
                            </ul>
                            <NavDropdown title="Логин" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Логин</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Регистрация
                                </NavDropdown.Item>
                            </NavDropdown>
                      
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBootstrap;
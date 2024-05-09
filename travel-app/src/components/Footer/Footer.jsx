import React from 'react'
import '../../allcss/footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {

    return (
        <div className='footer-main'>
            <div className='container'>
                <footer>
                    <div>
                        <div className='logo'>TRAVEL</div>
                        <div>
                            <h5>Мы в социальных сетях:</h5>
                            <div className='social-sets'>
                                <a href="#"><img src="../img/twitter.png" alt="twitter" /></a>
                                <a href="#"><img src="../img/insta.png" alt="insta" /></a>
                                <a href="#"> <img src="../img/facebook.png" alt="facebook" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='support'>
                        <h5>Поддержка</h5>
                        <NavLink to="/contacts" > Контакты </NavLink>
                        <NavLink to="/about" > О нас </NavLink>
                        <NavLink to="/news" > Новости </NavLink>
                    </div>
                    <div>
                        <h5>Связаться с нами</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className='call'><a href='tel: +7 747 620 28 79'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a></div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
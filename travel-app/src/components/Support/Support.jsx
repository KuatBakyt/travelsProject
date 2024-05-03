import React, { useState } from 'react'
import "../../allcss/support.css"
import ButtonTourContainer from '../ButtonTour/ButtonTourContainer';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Support() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className='support-content'>
            <div className='container'>
                <div className='support-info'>
                    <h2>Вам нужна помощь?</h2>
                    <h4>Позвоните нам или напишите сообщение. Наши агенты свяжутся с вами в ближайшее время.</h4>
                    <div className='support-callback'>
                        <div className='support-btn' onClick={handleShow}>
                            Cвязаться с нами
                        </div>
                        <a href='tel: +7 747 620 28 79' className='phone'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a>
                    </div>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ButtonTourContainer />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Support
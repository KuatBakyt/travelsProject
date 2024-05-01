import React, { useState } from 'react'
import "../../allcss/support.css"
import Buttontour from '../ButtonTour/Buttontour';

function Support() {

    const [isButtonOpen, setIsButtonOpen] = useState(false);

    const buttonOpen = () => {
        setIsButtonOpen(true);
    };
  
    const buttonClose = () => {
        setIsButtonOpen(false);
    };

    return (
        <div className='support-content'>
            <div className='container'>
                <div className='support-info'>
                    <h2>Вам нужна помощь?</h2>
                    <h4>Позвоните нам или напишите сообщение. Наши агенты свяжутся с вами в ближайшее время.</h4>
                    <div className='support-callback'>
                        <div className='support-btn' onClick={buttonOpen}>
                            Cвязаться с нами
                        </div>
                        <a href='tel: +7 747 620 28 79' className='phone'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a>
                    </div>
                </div>
            </div>

            {isButtonOpen && <Buttontour onClose={buttonClose} />}
            {isButtonOpen && <div className="overlay"></div>}
        </div>
    )
}

export default Support
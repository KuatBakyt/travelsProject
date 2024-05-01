import React from 'react'
import "../../allcss/buttontour.css"

function Buttontour({onClose}) {

    const handleClick = () => {
        onClose(); 
    };

  return (
    <div className='buttontour'>
        <div className="buttontour-content">
            <div>
                <form action = "" className="buttontour-form">
                    <div className="buttontour-close">
                        <h3>Горящие туры со скидкой 40%</h3>
                        <img onClick={handleClick} src="./img/closelogin.png" alt="close"/>
                    </div>
                    <input type="text" placeholder="Имя" className="box"></input>
                    <input type="number" placeholder="Телефон" className="box"></input>
                    <input type="text" placeholder="Направление" className="box"></input>
                    <input type="text" placeholder="Город вылета" className="box"></input>
                    <textarea placeholder="Комментарий" name="" id="" cols="30" rows="10"></textarea>

                    <button type="button" className="buttontour-btn">Рассчитать тур</button>
                </form>    
            </div>
        </div>
    </div>
  )
}

export default Buttontour
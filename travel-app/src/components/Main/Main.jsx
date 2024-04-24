import React from 'react'
import '../../allcss/main.css'

function Main() {
  return (
    <div className='main-content'>
      <div className='container'>
        <main>
          <div className='main-title'>
            <h1>ИНДИВИДУАЛЬНЫЕ ЭКСКУРСИИ И ТУРЫ В АЛМАТЫ</h1>
            <h5>Мы предлагаем вам доступную цену и отличный сервис</h5>
            <div className='main-support'>
              <div className='main-btn'>Предложения</div>
              <a href='tel: +7 747 620 28 79' className='phone'><img src="../img/phone.png" alt="" /> +7 747 620 28 79</a>
            </div>
          </div>
          <div className='main-social'>
            <a href="#"><img src="../img/twitter.png" alt="twitter" /></a>
            <a href="#"><img src="../img/insta.png" alt="insta" /></a>
            <a href="#"> <img src="../img/facebook.png" alt="facebook" /></a>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main
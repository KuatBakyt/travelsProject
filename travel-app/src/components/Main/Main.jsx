import React, { useState } from 'react'
import '../../allcss/main.css'
import Support from '../Support/Support'
import ItemsContainer from '../Items/ItemsContainer'
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <div className='main-bg-f'>
        </div>
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='main-bg-s'>
        </div>
        {/* <img src='../img/main-bg-sec.jpg' className='d-block w-100' style={{height: 590,  backgroundPosition: 200, background: 'linear-gradient(90deg, rgba(108,57,108,0.5130427170868348) 100%, rgba(0,0,0,0) 100%)'}} alt='...' /> */}
          <Carousel.Caption>
          <main>
            <div className='main-title'>
              <h1>ГРУППОВЫЕ ЭКСКУРСИИ И ТУРЫ В АЛМАТЫ</h1>
              <h5>Чтобы отлично провести время с близкими людьми, вам стоит ответственно подойти к выбору тура.</h5>
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div className='container'>
        <div className='search-item'>
          <img src="../img/search.png" alt="" />
          <input type="text" placeholder='Поиск туров...' />
        </div>
      </div>

      <ItemsContainer />
      <Support />
    </div>

  )
}

export default Main
import React, { useState } from 'react'
import '../../allcss/main.css'
import Support from '../Support/Support'
import ItemsContainer from '../Items/ItemsContainer'
import SearchContainer from '../Search/SearchContainer'
import Carousel from 'react-bootstrap/Carousel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonTourContainer from '../ButtonTour/ButtonTourContainer';


function Main() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                    <div className='main-btn' onClick={handleShow}>Предложения</div>
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
            <Carousel.Caption>
              <main>
                <div className='main-title'>
                  <h1>ГРУППОВЫЕ ЭКСКУРСИИ И ТУРЫ В АЛМАТЫ</h1>
                  <h5>Чтобы отлично провести время с близкими людьми, вам стоит ответственно подойти к выбору тура.</h5>
                  <div className='main-support'>
                    <div className='main-btn' >Предложения</div>
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
          <SearchContainer />
        </div>

        <ItemsContainer />
        <Support handleClose={handleClose}/>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ButtonTourContainer handleClose={handleClose}/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

export default Main;
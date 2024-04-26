import React from 'react'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts'
import Headroom from 'react-headroom';
<<<<<<< HEAD
import Reviews from './components/Reviews/Reviews';
=======
import HeaderContainer from './components/Header/HeaderContainer';
>>>>>>> 04cc947cf0a96d433034f87829ddfa650419093a

function App() {
  return (
    <div>
      <Headroom>
      <HeaderContainer />
      </Headroom>
     
      <div className='section'>
      <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/news' element={<News />}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

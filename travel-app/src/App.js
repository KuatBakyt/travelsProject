import React from 'react'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Headroom from 'react-headroom';
import Reviews from './components/Reviews/Reviews';
import HeaderContainer from './components/Header/HeaderContainer';
import ItemDescriptionContainer from './components/Items/Item/ItemDescription/ItemDescriptionContainer';
import Pay from './components/Pay/Pay';
import HeaderBootstrap from './components/HeaderBootstrap/HeaderBootstrap';
import NewsContainer from './components/News/NewsContainer';
import TourPage from './components/TourPage/TourPage';
import NewsDescriptionContainer from './components/News/NewsDescription/NewsDescriptionContainer';
import PreLoader from './components/Preloader/Preloader';
import Notice from './components/Notice/Notice';

function App() {
  return (
    <div>
      <Headroom>
      <HeaderContainer />
      </Headroom>
     
      <Routes>
      <Route path="/ItemDescription/:id/" element={<ItemDescriptionContainer />} />
      <Route path="/NewsDescription/:id/" element = {<NewsDescriptionContainer/>}/>
      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/news' element={<NewsContainer />}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/pay' element={<Pay />}/>
      <Route path="/tour/:id" element={<TourPage/>} />
      <Route path='/preloader' element={<PreLoader/>}/>
      </Routes>
      <Notice/>
      <Footer/>
    </div>
  );
}

export default App;

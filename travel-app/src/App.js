import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import News from './components/News/News'
import Comments from './components/Comments/Comments'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <div>
      <Header />
      <div className='section'>
      <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/news' element={<News />}/>
      <Route path='/comments' element={<Comments />}/>
      <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

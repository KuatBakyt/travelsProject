import React from 'react'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts'
import Headroom from 'react-headroom';
import HeaderContainer from './components/Header/HeaderContainer';
import ItemDescriptionContainer from './components/Items/Item/ItemDescription/ItemDescriptionContainer';
import Pay from './components/Pay/Pay';
import Login from './components/Login/Login';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import Profile from './components/Profile/Profile';
import ReviewsContainer from './components/Reviews/ReviewsContainer';
import AddCommentContainer from './components/Reviews/AddComment/AddCommentContainer';

function App() {
  return (
    <div>
      <Headroom>
      <HeaderContainer />
      </Headroom>
     
      <Routes>
      <Route path="/ItemDescription/:id/" element={<ItemDescriptionContainer />} />

      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/news' element={<News />}/>
      <Route path='/reviews' element={<ReviewsContainer/>}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/pay' element={<Pay />}/>
      <Route path='/register' element={<RegistrationContainer />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/addcomment' element={<AddCommentContainer />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

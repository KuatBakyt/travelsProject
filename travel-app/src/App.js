import React from 'react'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Headroom from 'react-headroom';
import HeaderContainer from './components/Header/HeaderContainer';
import ItemDescriptionContainer from './components/Items/Item/ItemDescription/ItemDescriptionContainer';
import NewsContainer from './components/News/NewsContainer';
import NewsDescriptionContainer from './components/News/NewsDescription/NewsDescriptionContainer';
import PreLoader from './components/Preloader/Preloader';
import Notice from './components/Notice/Notice';
import Login from './components/Login/Login';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import ReviewsContainer from './components/Reviews/ReviewsContainer';
import AddCommentContainer from './components/Reviews/AddComment/AddCommentContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import PayContainer from './components/Pay/PayContainer';

function App() {
  return (
    <div>
      <Headroom>
        <HeaderContainer />
      </Headroom>
      <Routes>
        <Route path="/ItemDescription/:id/" element={<ItemDescriptionContainer />} />
        <Route path="/NewsDescription/:id/" element={<NewsDescriptionContainer />} />

        <Route path='/' element={<Main />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/news' element={<NewsContainer />} />
        <Route path='/reviews' element={<ReviewsContainer />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/pay' element={<PayContainer />} />
        <Route path='/preloader' element={<PreLoader />} />
        <Route path='/register' element={<RegistrationContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/addcomment' element={<AddCommentContainer />} />
      </Routes>
      <Notice />
      <Footer />

    </div>
  );
}

export default App;

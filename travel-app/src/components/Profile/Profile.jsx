import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Profile() {
    let navigate = useNavigate()
     let logOut = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }
  return (
    <div className='profile-content'>
        <div className='container'>
        <NavLink to="/login" onClick={logOut}> Выйти </NavLink>
        </div>
    </div>
  )
}

export default Profile
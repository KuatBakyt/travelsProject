import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "../../allcss/profile.css"
import { FiPhone } from "react-icons/fi";
import { MdOutlineInsertComment } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

let Profile = ({ authUser, allCommentsCount, ...props }) => {
  const [eyes, setEye] = useState(true)
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  let logOut = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  let deleteProfile = () => {
    props.deleteProfile(props.authUser.id)
    localStorage.removeItem('user')
    navigate('/login')
  }

  const newEmail = React.useRef();
  const newName = React.useRef();
  const newSurname = React.useRef();
  const newCountry = React.useRef();
  const newPhone = React.useRef();
  const newUrlImg = React.useRef();
  const newPassword = React.useRef();

  let updateUserInfoText = () => {
    props.updateUserInfoText(
      newCountry.current.value,
      newEmail.current.value,
      newName.current.value,
      newSurname.current.value,
      newPhone.current.value,
      newUrlImg.current.value,
      newPassword.current.value,
    )
  }

  let handleChangeInfo = () => {
    props.handleChangeInfo(authUser.id, authUser)
    handleClose()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='profile-content'>
      <div className='profile-head'> <h2>Профиль</h2></div>
      <div className='profile-avatar'>
        <img src={
          authUser.urlImg !== null
            ? (authUser.urlImg)
            : "../img/ava.png"
        } alt="" />
      </div>
      <div className='profile-foot'>
        <div className='container'>
          <div className='profile-foot-details'>
            <div className='profile-titles'>
              <h4>{authUser.name} {authUser.surname}</h4>
              <p>{authUser.email}</p>
            </div>
            <div className='profile-detail'>
              <div className='profile-detail-info'><IoLocationSharp className="profile-icons" /> {authUser.country}</div>
              <div className='border-between'></div>
              <div className='profile-detail-info'><FiPhone className="profile-icons" />  {authUser.phonenumber}</div>
              <div className='border-between'></div>
              <Link className='profile-detail-info' to="/reviews" ><MdOutlineInsertComment className="profile-icons"/> Комментарий {
                allCommentsCount == ""
                  ? "0"
                  : allCommentsCount
              }
              </Link>
            </div>
            <div className='profile-actions'>

              <Button variant="primary" onClick={handleShow}>Редактировать</Button>{' '}
              <Button variant="danger" onClick={deleteProfile}>Удалить</Button>{' '}
              <NavLink to="/login" onClick={logOut}> <Button variant="secondary">Выйти</Button>{' '}</NavLink>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование аккаунта</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Напишите Email</Form.Label>
              <Form.Control required type="text" value={props.newEmail} ref={newEmail} onChange={updateUserInfoText} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Имя</Form.Label>
              <Form.Control required type="text" value={props.newName} ref={newName} onChange={updateUserInfoText} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control required type="text" value={props.newSurname} ref={newSurname} onChange={updateUserInfoText} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Страна</Form.Label>
              <Form.Control required type="text" value={props.newCountry} ref={newCountry} onChange={updateUserInfoText} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control required type="text" value={props.newPhone} ref={newPhone} onChange={updateUserInfoText} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Ваша картинка URL</Form.Label>
              <Form.Control required type="text" value={props.newUrlImg} ref={newUrlImg} onChange={updateUserInfoText} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea7">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type={eyes ? "password" : "text"} value={props.newPassword} ref={newPassword} onChange={updateUserInfoText} />
              {
                eyes ? (<span className='profile-eye' onClick={() => (setEye(false))}>
                  <FaEye />
                </span>) :
                  (
                    <span className='profile-eye' onClick={() => (setEye(true))}>
                      <FaEyeSlash />
                    </span>
                  )
              }
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChangeInfo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal >
    </div>
  )
}

export default Profile
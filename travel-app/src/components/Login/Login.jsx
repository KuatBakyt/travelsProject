import React, { useState } from 'react'
import s from "../../allcss/login.module.css"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

let Login = () => {
    const navigate = useNavigate()
    const [eyes, setEye] = useState(true)
    const [newUser, SetNewUser] = useState({
      email: null,
      password: null
    })
  
    let singIn = () => {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('error HTTP, status' + response.status)
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem('user', JSON.stringify({ ...data.user, accessToken: data.accessToken }))
          navigate('/')
        })
        .catch((error) => {
          console.log("Произошла ошибка", error);
        })
    }
  
    return (
      <div className={s.login}>
        <div className='container'>
          <h3 className="mb-3">Логин</h3>
          <Form action=''>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Напишите Email</Form.Label>
              <Form.Control required type="text" onChange={(e) => SetNewUser({ ...newUser, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type={eyes ? "password" : "text"} onChange={(e) => SetNewUser({ ...newUser, password: e.target.value })} />
              {
                eyes ? (<span className={s.eye} onClick={() => (setEye(false))}>
                  <FaEye />
                </span>) :
                  (
                    <span className={s.eye} onClick={() => (setEye(true))}>
                      <FaEyeSlash />
                    </span>
                  )
              }
            </Form.Group>
  
            <Button variant="primary" onClick={singIn}> Войти</Button>{' '}
            <Link to='/register'>Зарегистрироваться</Link>
          </Form>
        </div>
      </div>
    )
  }
  
  export default Login
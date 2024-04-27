import React, { useState } from 'react'
import s from "../../allcss/registration.module.css"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Registration(props) {
    const navigate = useNavigate();
    const [eyes, setEye] = useState(true)
    const [newUser, setNewUser] = useState({
        email: null,
        name: null,
        surname: null,
        password: null,
        country: null,
        phonenumber: null,
        urlImg: null
    })


    let handleCreateUser = () => {
        console.log(newUser);

        fetch("http://localhost:8080/register", {
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
            .then(data => {
                console.log(data);
                props.createUser(data)
                localStorage.setItem('user', JSON.stringify({ ...data.user, accessToken: data.accessToken }))
                navigate("/") 
            })
            .catch((error) => {
                console.log("Произошла ошибка", error);
            })
    }

    return (
        <div className={s.registration}>
            <div className='container'>
                <h3 className="mb-3">Регистрация</h3>
                <Form action=''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Напишите Email</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Страна</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, country: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, phonenumber: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                        <Form.Label>Ваша картинка URL</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setNewUser({ ...newUser, urlImg: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea7">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type={eyes ? "password" : "text"} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
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

                    <Button variant="primary" className='m-3' type="button" onClick={handleCreateUser}> Создать аккаунт</Button>{' '}
                    <Link to='/login' className='m-3'>У меня есть аккаунт</Link>
                </Form>

            </div>
        </div>
    )
}

export default Registration
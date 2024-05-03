import React, { useState } from 'react'
import "../../allcss/buttontour.css"
import Form from 'react-bootstrap/Form';


function Buttontour({ toursData, ...props }) {
    const newEmail = React.useRef();
    const newName = React.useRef();
    const newPhone = React.useRef();
    const newPlace = React.useRef();
    const newExplain = React.useRef();

    let addRequest = () => {
        props.addRequest();
        newEmail.current.value = "";
        newName.current.value = "";
        newPhone.current.value = "";
        newPlace.current.value = "";
        newExplain.current.value = "";
        props.handleClose();
    }

    let updateNewRequestText = () => {
        props.updateNewRequestText(
            newEmail.current.value,
            newName.current.value,
            newPhone.current.value,
            newPlace.current.value,
            newExplain.current.value,
        )
    }

    return (
        <div className='buttontour'>
            <div className="buttontour-content">
                <div>
                    <Form>
                        <div className="buttontour-close">
                            <h3>Горящие туры со скидкой 40%</h3>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Личные данные</Form.Label>
                            <Form.Control required id="validationDefault01" type="text" placeholder="name@example.com" value={props.newEmail} ref={newEmail} onChange={updateNewRequestText} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Имя" value={props.newName} ref={newName} onChange={updateNewRequestText} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control required id="validationDefault01" type="number" placeholder="Номер телефона" value={props.newPhone} ref={newPhone} onChange={updateNewRequestText} />
                        </Form.Group>
                        <Form.Select className="mb-3" aria-label="Default select example">
                            <option>Выберете место</option>
                            {
                                toursData.map(tour => (
                                    <option key={tour.id} value={props.newPlace} ref={newPlace} onChange={updateNewRequestText}>
                                        {tour.name}
                                    </option>
                                ))
                            }
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label >Описание</Form.Label>
                            <Form.Control as="textarea" rows={3} value={props.newExplain} ref={newExplain} onChange={updateNewRequestText} />
                        </Form.Group>
                        <button type="button" className="buttontour-btn" onClick={addRequest}>Рассчитать тур</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Buttontour
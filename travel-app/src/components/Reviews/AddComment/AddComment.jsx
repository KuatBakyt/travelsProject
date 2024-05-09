import React from 'react'
import { Form } from 'react-bootstrap';
import "../../../allcss/reviews.css"
import { useNavigate } from 'react-router-dom';
import { IoIosStar } from "react-icons/io"
    
function AddComment(props) {
    let navigate = useNavigate();
    const newCommentMessage = React.useRef();

    let addComment = () => {
        props.addComment({
            id: props.authUser.id,
            name: props.authUser.name,
            surname: props.authUser.surname,
            email: props.authUser.email,
            urlImg: props.authUser.urlImg
        });

        newCommentMessage.current.value = ""
        navigate("/reviews")
    }

    let updateNewComments = () => {
        props.updateNewComments(newCommentMessage.current.value)
    }

    return (
        <>
            <div className='container'>
                <div className='add-comments'>

                    <Form onSubmit={addComment}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Оставьте отзыв</Form.Label>
                            <Form.Control as="textarea" id="validationDefault01" rows={3} value={props.commentsPage.newCommentMessage} ref={newCommentMessage} onChange={updateNewComments} required />
                            <div className="betterview mb-3">
                                <IoIosStar size={25} class={props.commentsPage.rating >= 1 ? 'star-fill' : 'star-none'}
                                    onClick={() => { props.rate(1) }} />
                                <IoIosStar size={25} class={props.commentsPage.rating >= 2 ? 'star-fill' : 'star-none'}
                                    onClick={() => { props.rate(2) }} />
                                <IoIosStar size={25} class={props.commentsPage.rating >= 3 ? 'star-fill' : 'star-none'}
                                    onClick={() => { props.rate(3) }} />
                                <IoIosStar size={25} class={props.commentsPage.rating >= 4 ? 'star-fill' : 'star-none'}
                                    onClick={() => { props.rate(4) }} />
                                <IoIosStar size={25} class={props.commentsPage.rating >= 5 ? 'star-fill' : 'star-none'}
                                    onClick={() => { props.rate(5) }} />
                                <p className='mb-3'>Оценка: {props.commentsPage.rating}</p>
                            </div>
                        </Form.Group>
                        <button className='btn btn-primary'>Отправить</button>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default AddComment
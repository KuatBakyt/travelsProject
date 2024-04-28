import React from 'react'
import { Button, Form } from 'react-bootstrap';
import "../../../allcss/reviews.css"


function AddComment(props) {
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
    }

    let updateNewComments = () => {
        props.updateNewComments(newCommentMessage.current.value)
    }

    return (
        <>
            <div className='container'>
                <div className='add-comments'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Оставьте отзыв</Form.Label>
                            <Form.Control required as="textarea" rows={3} value={props.commentsPage.newCommentMessage} ref={newCommentMessage} onChange={updateNewComments} />
                        </Form.Group>
                        <Button onClick={addComment} variant="primary">Отправить</Button>{' '}
                    </Form>
                </div>
            </div>

        </>
    )
}

export default AddComment
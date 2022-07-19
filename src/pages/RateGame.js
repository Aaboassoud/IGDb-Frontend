import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function RateGame(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const params = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/review/ratings/${params.id}`)
            .then(res => {
                console.log(res.data['Ratings Comments']);
                setData(res.data['Ratings Comments'])
            })
            .catch(err => { console.log(err) })
    }, [params.id])
    return (
        <div className='container text-center'>
            <Row className='mt-5'>
                <Col>
                    <>
                        <Card className='text-white bg-dark'>
                            <Card.Img variant="top" src={Array.from(new Set(data.map(item => item.game.image)))} />
                        </Card>
                    </>
                </Col>
                <Col>
                    <h1 className='text-center mb-5 text-danger'>Ratings</h1>
                    <Row sm={1} md={3} className="g-4">

                        {data.map(e => (
                            <>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Body className='text-danger p-1'>Username: {e.user.username}</Card.Body>
                                        <Card.Body className='text-warning p-1'>Rated: {e.rating}</Card.Body>
                                    </Card.Body>
                                </Card>

                            </>
                        ))}
                    </Row>
                    <Card className='m-5 text-white bg-dark'>
                        <Card.Body>
                            <Card.Title className='text-danger'>Average rating:</Card.Title>
                            <Card.Title className='text-warning'>{Array.from(new Set(data.map(item => item.game.rating)))}</Card.Title>
                            <Button variant="info" onClick={handleShow}>Add Rating</Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <h5>Add rating: </h5><input type='text' />
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

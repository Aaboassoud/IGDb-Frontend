import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function GetDetails() {
    const [data, setData] = useState([]);
    const params = useParams()
    const token = localStorage.getItem("token")
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/games/details/${params.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res.data.games);
                setData(res.data.games);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div className='container text-center'>
        <Row className='mt-5'>
                <Col>
                    <>
                        <Card className='text-white bg-dark'>
                            <Card.Img variant="top" src={Array.from(new Set(data.map(item => item.image)))} />
                        </Card>
                    </>
                </Col>
                <Col>
                    <h1 className='text-center mb-5 text-danger'>Ratings</h1>
                    <Row sm={2} md={2} className="">

                        {data.map(e => (
                            <>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Game: </Card.Title>
                                        <Card.Body>{e.game_title}</Card.Body>
                                    </Card.Body>
                                </Card>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Company: </Card.Title>
                                        <Card.Body>{e.company}</Card.Body>
                                    </Card.Body>
                                </Card>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Date Realeased: </Card.Title>
                                        <Card.Body>{e.date_realeased.slice(0,10)}</Card.Body>
                                    </Card.Body>
                                </Card>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Description: </Card.Title>
                                        <Card.Body>{e.description}</Card.Body>
                                    </Card.Body>
                                </Card>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Owner: </Card.Title>
                                        <Card.Body>Dev. {e.user.username}</Card.Body>
                                    </Card.Body>
                                </Card>
                                <Card className='text-white bg-dark'>
                                    <Card.Body>
                                        <Card.Title className='text-warning p-1'>Rating: </Card.Title>
                                        <Card.Body>{e.rating}</Card.Body>
                                    </Card.Body>
                                </Card>

                            </>
                        ))}
                    </Row>
                </Col>
            </Row>
    </div>
  )
}

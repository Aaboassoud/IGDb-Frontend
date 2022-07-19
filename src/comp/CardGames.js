import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Card, CardGroup, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CardGames() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/games/all')
            .then(res =>{
                console.log(res.data.games);
                setData(res.data.games)
            })
            .catch(err => {console.log(err)})
        },[])
  return (
    <div class="">
        <div class="">
            <Row sm={1} md={3} className="g-4">
                {data.map(e=>(
                    <>
                    <Col>
                        <Card className='h-100 text-white bg-dark'>
                            <Card.Img variant="top" src={e.image} />
                            <Card.Body>
                                <Card.Title className='text-warning'>{e.game_title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='bg-dark text-info'>{`Date Realeased: ${e.date_realeased.slice(0,10)}`}</ListGroup.Item>
                                <ListGroup.Item className='bg-dark text-info'>{`Rating: ${e.rating}`}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Link to={`RateGame/${e.id}`} className='m-2'><Card.Link className='btn btn-warning' href="#">Rate it</Card.Link></Link>
                                <Link to="Details" className='m-2'><Card.Link className='btn btn-outline-info'>Details</Card.Link></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    </>
                ))}
            </Row>
        </div>
    </div>
  )
}
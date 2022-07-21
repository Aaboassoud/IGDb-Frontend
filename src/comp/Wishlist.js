import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Wishlist() {
    const [data, setData] = useState([]);
    const [hover, setHover] = useState(false);
    const isLoggedIn = localStorage.getItem('token')

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/games/my_wishlist", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
        <div className="center text-center ">
            <div className="d-flex justify-content-center"><h1 className="center text-center text-danger mt-5 bg-dark p-2 w-25 rounded">My Wishlist</h1></div>
            <Row sm={1} md={3} className="g-4 mt-5">
                {data.map((e) => (
                    <>
                        <Col>
                            <Card className="h-100 text-white bg-dark">
                                <Card.Img src={e.game.image}></Card.Img>
                                {isLoggedIn?<Link onMouseEnter={onHover} onMouseLeave={onLeave} to={`/Remove/${e.id}`} className="btn btn-danger">{hover ? <AiOutlineHeart /> : <AiFillHeart />}</Link>:null}
                            </Card>
                        </Col>
                    </>
                ))}
            </Row>
        </div>
    )
}

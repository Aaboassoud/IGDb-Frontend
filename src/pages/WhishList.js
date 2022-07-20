import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function WishList() {
  const [data, setData] = useState([]);
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
    <div>
      <div class="">
        <Row sm={1} md={3} className="g-4">
          {data.map((e) => (
            <>
              <Col>
                <Card className="h-100 text-white bg-dark">
                  <Card.Body>{e.game.game_title}</Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </div>
  );
}

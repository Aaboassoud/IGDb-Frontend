import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";

export default function Nav1() {
  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [showLogout]);
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/" className="text-warning">
          IGDb
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/whishlist" className="text-warning">
          WhishList
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {showLogout ? (
          <Nav.Link
            eventKey="Logout"
            onClick={() => {
              return localStorage.clear(), setShowLogout(false);
            }}
            className="text-warning"
          >
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link eventKey="Login" href="/Login" className="text-warning">
            Login
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";

export default function Nav1() {
  const [showLogout, setShowLogout] = useState(false);
  const isLoggedIn = localStorage.getItem('token')
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [showLogout]);
  return (
    <Nav fill variant="tabs" defaultActiveKey="/" className="h5">
      <Nav.Item>
        <Nav.Link href="/Home" className="text-warning">
          IGDb
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" className="text-warning bg-dark">
          Games
        </Nav.Link>
      </Nav.Item>
        {showLogout ? (
          <>
      <Nav.Item>
        <Nav.Link href="/WishList" className="text-warning">
          WhishList
        </Nav.Link>
      </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="Profile" href="/Profile" className="text-warning">
            Profile
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link
            eventKey="Logout"
            onClick={() => {
              return localStorage.clear(), setShowLogout(false);
            }}
            className="text-warning"
          >
            Logout
          </Nav.Link>
          </Nav.Item>
          </>
        ) : (
          <Nav.Link eventKey="Login" href="/Login" className="text-warning">
            Login
          </Nav.Link>
        )}
    </Nav>
  );
}

import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Nav1() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href='/' className='text-warning'>IGDb</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-warning'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav.Item>      
      <Nav.Item>
        
        { localStorage.getItem('token')!=null?<Nav.Link eventKey="Logout" onClick={()=>{
          return (localStorage.clear(),window.location.reload()
          )}} 
          className='text-warning'>Logout</Nav.Link> : <Nav.Link eventKey="Login" href='/Login' className='text-warning'>Login</Nav.Link>}
      </Nav.Item>
    </Nav>
  )
}

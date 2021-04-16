import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { NavLink, useHistory } from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()
  return (
    <>
      <Navbar bg="light" expand="lg">
        <NavLink className="navbar-brand" to="/" exact>
          Test
        </NavLink>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavLink className="nav-link" to="/" exact activeClassName="active">
                หน้าหลัก
              </NavLink>

              <NavLink className="nav-link" to="/product"  activeClassName="active">
                สินค้า
              </NavLink>

              <NavLink className="nav-link" to="/about"  activeClassName="active">
                เกี่ยวกับเรา
              </NavLink>
            <NavDropdown title="Workshop (Pagination + CRUD )" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                  history.replace('/hospital')
              }} >
                ข้อมูลสถานพยาบาล (Pagination)
                </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                  history.replace('/category')
              }}>
                หมวดหมู่ข่าว (CRUD)
              </NavDropdown.Item>
           
        
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

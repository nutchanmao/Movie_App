import React from 'react';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';

function Header ({handleInput,handleOnSubmit,stateSearchTerm,handleOnChange}){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title=" Movie Type" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#none">1</NavDropdown.Item>
                        <NavDropdown.Item href="#none">2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <form action="" onSubmit={handleOnSubmit}  className="Search_wrap">
                    <input type="text"  placeholder="Search Movies..."  value={stateSearchTerm} onChange={handleOnChange}  className="searchBox"/>
                </form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
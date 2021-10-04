import React from 'react';
import { Button, Form, Navbar,Nav,FormControl } from 'react-bootstrap';

function NavbarApp(){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">RecipyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/recipy">Recipy</Nav.Link>
                    <Nav.Link href="/contact">
                        <Button>Contact</Button>
                    </Nav.Link>
                   
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarApp;
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href = "/">brand name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-Navbar-nav"/>
            <Navbar.Collapse id = "basic-Navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item>  <Nav.Link href="/">Home</Nav.Link>          </Nav.Item>
                    <Nav.Item>  <Nav.Link href="/about">about</Nav.Link>    </Nav.Item>
                    <Nav.Item>  <Nav.Link href="/contact">contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
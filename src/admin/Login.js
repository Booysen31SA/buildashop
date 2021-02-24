import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import avatar from '../assests/avatar/avatart.png';

export const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const Styles = styled.div`
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fields{
        border-radius: 75px;
    }
    .loginBackground{
          border: 2px solid #efefef;
          background-color: #efefef;
          border-radius: 5px;
          padding:5vh;
    }
    .defaultCenter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;  
        }
    .body{
        min-height: 100vh;
        display: flex;
        font-weight: 400;
        font-family: sans-serif;
        background: #12c2e9;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-size: cover;
    }
    `;

return (
    <Styles>
        <div className="body">
            <Container>
                <Row className="center">
                    <Col lg={3}></Col>
                    <Col className="loginBackground">
                        <h1 className="defaultCenter">Login</h1>
                        <div className="defaultCenter">
                            <Image roundedCircle src={avatar} />
                        </div>

                        <hr></hr>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control required className="fields" type="email" placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                 </Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                 </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control required className="fields" type="password" placeholder="Password" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" >
                                    <Form.Check.Input></Form.Check.Input>
                                    <Form.Check.Label>Remember me</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>

                            <div className="button">
                                <Button variant="primary" type="submit" block>
                                    Login
                            </Button>
                            </div>

                        </Form>

                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>

        </div>
    </Styles>
)
};
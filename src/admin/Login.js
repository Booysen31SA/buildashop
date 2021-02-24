import React from 'react';
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import avatar from '../assests/avatar/avatart.png';
import { Formik } from 'formik';
import * as yup from 'yup';
import { rememberSave } from './Functions/Functions';

export const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
        rememberMe: yup.boolean(),
    });


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
        <Formik
            validationSchema={schema}
            onSubmit={
                async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                var json = values.email;
                var email = values.email;
                var password = values.password;
                var rememeber = values.rememberme;

                rememberSave(email, password, rememeber);
              }}
            initialValues={{
                email: '',
                password: '',
                rememberme: false
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                
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
                                    <Form noValidate onSubmit={handleSubmit}>

                                        <Form.Group controlId="validationFormik01">
                                            <Form.Control
                                                className="fields"
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik02">
                                            <Form.Control
                                                className="fields"
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                isValid={touched.password && !errors.password}
                                                isInvalid={!!errors.password} />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Check
                                                name="rememberMe"
                                                label="Remember me"
                                                id="validationFormik0"
                                                onChange={handleChange}
                                            />

                                            <Form.Text className="text-muted">
                                                Please keep your email and password secure.
                                            </Form.Text>
                                        </Form.Group>

                                        <br></br>
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
                
            )}
        </Formik>
        </Styles>
    );
};
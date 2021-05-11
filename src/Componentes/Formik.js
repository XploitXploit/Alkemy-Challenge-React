import React from 'react'
import { Form, Button, Container,Col } from 'react-bootstrap'

function FormikLogin() {
    return (
        
        <Container>
            <h1>Login</h1>
            <Form className="">
            <Col xs={6}>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            </Col>
            
            <Col xs={6}>
            <Form.Group controlId="formBasicPassword" className="py-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button  variant="primary" type="submit">
                Submit
            </Button>
            </Col>
            
        </Form>
        </Container>
        
    )
}

export default FormikLogin

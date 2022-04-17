import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef=useRef('')
      const passwordRef=useRef('')
      
      const handleLogin=e=>{

      }
    return (
        <Form onSubmit={handleLogin} className='w-25 mx-auto mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;
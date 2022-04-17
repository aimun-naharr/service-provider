import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef=useRef('')
      const passwordRef=useRef('')
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate()
      const handleLogin=e=>{
        e.preventDefault()
        const email= emailRef.current.value
        const password= passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        if(user){
            navigate('/home')
        }
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
        {
            loading?<p>Loading....</p>:''
        }
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    );
};

export default Login;
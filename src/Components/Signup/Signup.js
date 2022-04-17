import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate()
    
      const emailRef=useRef('')
      const passwordRef=useRef('')
      const confirmPassRef=useRef('')
      const handleSignUp=(event)=>{
        event.preventDefault()
        const email= emailRef.current.value
        const password= passwordRef.current.value
        createUserWithEmailAndPassword(email, password)
       if(user){
           navigate('/home')
       }
      }

    return (
        <Form onSubmit={handleSignUp} className='w-25 mx-auto mt-5'>
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
      loading?<p>loading</p>:''
  }
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
};

export default Signup;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import rest from '../../images/rest.jpg'
import './Login.css'
const Login = () => {
    const emailRef=useRef('')
      const passwordRef=useRef('')
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let location = useLocation();
      let from = location?.state?.from?.pathname || "/";

      const navigate=useNavigate()
      const handleLogin=e=>{
        e.preventDefault()
        const email= emailRef.current.value
        const password= passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        
      }
      if(user){
        navigate(from, { replace: true })
      }
     
    return (
        <div className="row container w-100 mx-auto justify-center align-items-center mt-5">
          <div className="col-md-6">
              <img className='' src={rest} alt="" />
          </div>
          <div className="col-md-6">
         
          <Form onSubmit={handleLogin} className='w-75 mx-auto mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
       
        <Button className='red-button w-50' type="submit">
          Log in
        </Button>
        <p>New to Margeret fox fitness? <Link className='link' to='/signup'>Please Signup</Link> </p>
      </Form>
          </div>
        </div>
    );
};

export default Login;
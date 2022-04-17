import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import rest from '../../images/rest.jpg'
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const emailRef=useRef('')
      const passwordRef=useRef('')
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, passwordError] = useSendPasswordResetEmail(
        auth
      );
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
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
     const handlePasswordReset=async()=>{
       const email= emailRef.current.value
      await sendPasswordResetEmail(email);
      toast('Email has been sent!');
     }
     
    return (
        <div>
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
        
        <Button className='red-button w-50' type="submit">
          Log in
        </Button><br />
        <button className='link-button' onClick={handlePasswordReset}>Forgot password?</button>
        <p>New to Margeret fox fitness? <Link className='link' to='/signup'>Please Signup</Link> </p>
        <button className='another-btn mx-2' onClick={() => signInWithGoogle()}><div className='d-flex align-items-center'><p className='me-2'><FcGoogle/></p>
        <p>Google sign in</p>
        </div></button>
      </Form>
      
          </div>
          
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Login;
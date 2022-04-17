import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import signUP from '../../images/signUP.jpg'
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const navigate=useNavigate()
    
      const emailRef=useRef('')
      const passwordRef=useRef('')
      const confirmPassRef=useRef('')
      const handleSignUp=async(event)=>{
        event.preventDefault()
        const email= emailRef.current.value
        const password= passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        alert('Sent email');
           navigate('/home')
      
      }
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

    return (
       <div className="row w-100 mx-auto container align-items-center">
       <h1 className='text-center mb-3'>Sign <span className='red-color'>up!</span></h1>
<div className="col-md-6">
<img className='mt-4' src={signUP} alt="" />
</div>
<div className="col-md-6">

<Form onSubmit={handleSignUp} className='w-75 mx-auto mt-5'>
        
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" required/>
        </Form.Group>
        
        {
            loading?<p>loading......</p>:''
        }
        <Button className='red-button w-50' type="submit">
          Submit
        </Button>
        <p>Already registered? <Link className='link' to='/login'>Please login</Link></p>
        <button className='another-btn' onClick={() => signInWithGoogle()}>Google sign in</button>
      </Form>
</div>
       </div>
    );
};

export default Signup;
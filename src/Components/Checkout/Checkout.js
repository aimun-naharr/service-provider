import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = () => {
   
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [displayName, setDisplayName]=useState('')
    const handleDisplayName=e=>{
        setDisplayName(e.target.value)
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await updateProfile({ displayName});
          toast(`Thanks for booking ${displayName}`)
          console.log(displayName)
    }
    return (
        <div className='mx-auto container w-50'>
            <div className="row">
                <div className="col-md-12">
                <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleDisplayName} type="text" placeholder="Your name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Contact number</Form.Label>
    <Form.Control type="number" placeholder="your phone number" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  
  <Button className='red-button' type="submit">
    Submit
  </Button>
  <ToastContainer/>
</Form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
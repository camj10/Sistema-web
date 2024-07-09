import React, { useState } from 'react'
import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate(); // Agrega esta línea para obtener la función de navegación
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if(res.data.Status === 'Success') {
                navigate('/login');
            } else {
                alert("Error to register")
            }
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>username</strong></label>
                    <input type="text" placeholder='Enter username' name='username' 
                    onChange={e => setValues({...values, username: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' 
                    onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'> Sign in</button>
                <p>You are agree to our terms and policies</p>
                <Link to="/login" className='btn btn-success w-100 rounded-0'>Login</Link>
            </form>
        </div>
</div>
  )
}

export default Register
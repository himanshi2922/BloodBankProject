import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from './css/images/logo.png'
import './css/login.css'
import Cookies from 'universal-cookie'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    function tryLogin() {
        axios.get(global.config.ip.ip_db+'/dataHandle/getLogin', {
            params: {
                email: email
            }
        })
            .then(res => {
                if (res.data.length === 0)
                    show_error()

                else {
                    if (password === res.data['0']['password'])
                    {
                        createnewpwd()
                        window.location.replace(global.config.ip.ip_react+'/home')
                    }
                        
                    else
                        show_error()
                }
            })
    }

    function createnewpwd()
    {
        const cookies = new Cookies()
        cookies.set('email',email,{path:'/'})
        cookies.set('password',password,{path:'/'})

        axios.post(global.config.ip.ip_db+'/dataHandle/addpwd',{"email":email})
    }

    function hide_error() {
        document.getElementById('err-msg').style.display = 'none'
    }

    function show_error() {
        document.getElementById('err-msg').style.display = 'inline'
    }

    return (
        <div className='login-main'>
            <div className='login-container2'>
                <img className='login-img' src={logo} alt='' /><br />
                <lable className='login-label'>LOG IN</lable><br />
                <input type='text' autoComplete='off' className='login-inputs' onChange={e => { setEmail(e.target.value) }} placeholder='Email ID' /><br />
                <input type='password' autoComplete='off' className='login-inputs' onChange={e => { setPassword(e.target.value) }} placeholder='Password' /><br />
                <button className='login-btn' onClick={tryLogin}>Login</button><br />
                
                <Link to='/signup' className='login-btn2'>Create an account</Link><br/>
                
            </div>
            <div className='alert-container' >
                <div className="alert" id='err-msg'>
                    <span className="closebtn" onClick={hide_error}>&times;</span>
                    Email Id or Password is incorrect
                </div>
            </div>
        </div>
    )
}

export default Login
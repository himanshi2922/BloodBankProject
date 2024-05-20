import React,{useState} from 'react' 
import './css/signup.css'
import logo from './css/images/logo.png'
import axios from 'axios'
import {Link} from 'react-router-dom'

function SignUp()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function createNewAccount() {
        const data = {
            'name': name,
            'email': email,
            'password': password
        }

        axios.get(global.config.ip.ip_db+'/dataHandle/getLogin', {
            params: {
                email: email
            }
        })
            .then(res => {
                if (res.data.length === 0) {
                    axios.post(global.config.ip.ip_db+'/dataHandle/addlogin', data)
                        .then((res) => {
                            show_error_green()
                        })
                }

                else {
                    console.log('Existing records present')
                    show_error()
                }

            })
    }

    function hide_error(){
        document.getElementById('err-msg-sign').style.display='none'
    }

    function show_error(){
        document.getElementById('err-msg-sign').style.display='inline'
    }

    function hide_error_green(){
        window.location.replace(global.config.ip.ip_react+'/signup')
    }

    function show_error_green(){
        document.getElementById('err-msg-sign-green').style.display='inline'
    }

    return(
        <div className='signup-main'>
            <div className='signup-container'>
                <img className='signup-img' src={logo} alt='' /><br/>
                <lable className='login-label'>SIGN UP</lable><br/>
                <input type='text' autoComplete='off' className='signup-inputs' onChange={e => { setName(e.target.value) }} placeholder='Name' /><br />
                <input type='text' autoComplete='off' className='signup-inputs' onChange={e => { setEmail(e.target.value) }} placeholder='Email ID' /><br />
                <input type='password' autoComplete='off' className='signup-inputs' onChange={e => { setPassword(e.target.value) }} placeholder='Password' /><br />
                <button className='signup-btn' onClick={createNewAccount}>Sign Up</button><br/>
                <Link to = '/login' className='signup-btn3'>Go back to login</Link>
            </div>

            <div className='alert-container-sign' >
            <div className="alert-sign" id='err-msg-sign'>
                <span className="closebtn-sign"  onClick={hide_error}>&times;</span>
                    An account with same email exists
                </div>


            <div className="alert-sign-green" id='err-msg-sign-green'>
                <span className="closebtn-sign-green"  onClick={hide_error_green}>&times;</span>
                Account created
                </div>
                </div>

        </div>
    )
}

export default SignUp
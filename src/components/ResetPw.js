import React, { useState, useEffect } from 'react'
import './css/resetpw.css'
import axios from 'axios'
import Cookies from 'universal-cookie'

const ResetPw = () => {

    const [em, setEm] = useState('')
    const [pass, setPass] = useState('')
    const [nm, setNm] = useState('')

    useEffect(() => {
        document.title = 'Blood Bank'
        const cookies = new Cookies()
        setEm(cookies.get('email'))

        axios.get(global.config.ip.ip_db+'/dataHandle/getLogin', {
            params: {
                email: em
            }
        })
            .then((res) => {
                setNm(res.data[0].name)
            })
    })

    function passwordupdate() {
        axios.delete(global.config.ip.ip_db+'/dataHandle/deletelogin', {
            params: {
                email: em
            }
        })

        const data = {
            'name': nm,
            'email': em,
            'password': pass
        }
        axios.post(global.config.ip.ip_db+'/dataHandle/addlogin', data)
        alert('Password successfully updated')
    }

    function backtohome() {
        window.location.replace(global.config.ip.ip_react+'/home')
    }
    return (
        <div className='resetpw'>
            <div className='reset-container'>
                <h1 className='h1reset'>Change Password</h1>
                <input className='reset-inp' type='password' placeholder='New Password' onChange={e => { setPass(e.target.value) }}></input><br />
                <input className='reset-inp' type='password' placeholder='Confirm Password'></input><br />
                <div className='btn-div'>
                <button className='reset-btn' onClick={backtohome}>Back</button>
                <button className='reset-btn' onClick={passwordupdate}>Reset Password</button></div>
            </div>
        </div>
    )

}

export default ResetPw
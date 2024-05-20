import React from 'react' 
import './css/regdone.css'
import tick from './css/images/tick.png'

const RegistrationDone = () =>{
    
    const reg_done = () =>{
        window.location.replace(global.config.ip.ip_react+'/home')
    }

    return(
        <div className='reg-done'>
            <div className='reg-done-container'>
            <img src={tick} className='purchase-tick-reg' alt='registration done'/><br/>
                <h1 className='reg-text'>Your registration was successful</h1>
                <p className='reg-p'>Click <strong onClick={reg_done} className='reg-strong'>here</strong> to go back to home screen</p>
            </div>
        </div>
    )
}

export default RegistrationDone
import './css/registerdonor.css'
import React, { useState } from 'react'
import axios from 'axios'

function RegisterDonor() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [blood_grp, setBlood] = useState('A+')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [prior_disease, setDisease] = useState('')
    const [diabetic, setDiabetic] = useState('No')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('Individual')

    function onRegisterClick() {
        const register = {
            'first_name': fname,
            'last_name': lname,
            'type': type,
            'email': email,
            'phone': phone,
            'blood_grp': blood_grp,
            'city': city,
            'state': state,
            'prior_disease': prior_disease,
            'diabetic': diabetic,
            'price': price

        }
        axios.post(global.config.ip.ip_db+'/dataHandle/add', register)
            .then((res) => window.location.replace(global.config.ip.ip_react+'/registrationdone'))
    }

    const onback = () => window.location.replace(global.config.ip.ip_react+'/home')

    return (
        <div className='donor-main'>
            
            <div className='donor-container'>

                <form>
                    <h3>DONOR REGISTRATION</h3>
                    <strong>Personal Details</strong><br/>
                    <input type='text' autoComplete='off' onChange={e => { setFname(e.target.value) }} className='left-inp' placeholder='First Name' required />
                    <input type='text' autoCompelete='off' onChange={e => { setLname(e.target.value) }} className='right-inp' placeholder='Last Name' required /><br />
                    <strong>Contact Details</strong><br/>

                    <input type='email' autoComplete='off' onChange={e => { setEmail(e.target.value) }} className='left-inp' placeholder='Email ID' required />
                    <input type='text' autoComplete='off' onChange={e => { setPhone(e.target.value) }} className='right-inp' placeholder='Phone no' required /><br />

                    <strong>Donor type: </strong>
                    <select name="Donor Type" id="donor-type" onChange={e => { setType(e.target.value) }}>
                        <option value="Individual" selected>Individual</option>
                        <option value="Hosptial">Hosptial</option>
                        <option value="NGO">NGO</option>
                        <option value="Donor Camp">Donor Camp</option>
                    </select><br />

                    <strong>Enter your Blood group: </strong>
                    <select name="Blood Group" id="blood-grp" onChange={e => { setBlood(e.target.value) }}>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select><br />

                    <strong>Location</strong><br/>
                    <input type='text' autoComplete='off' placeholder='City/Town/Area' className='left-inp' onChange={e => { setCity(e.target.value) }} required />
                    <input type='text' autoComplete='off' className='right-inp' placeholder='State' onChange={e => { setState(e.target.value) }} required /><br />

                    <strong>Prior Disease</strong><br/>
                    <input type='text' autoComplete='off' placeholder='Prior Disease(if any)' className='left-inp' onChange={e => { setDisease(e.target.value) }} required />
                    <br />

                    <strong>Are you diabetic?: </strong>
                    <select name="diabetic-check" id="diabetic-check" onChange={e => { setDiabetic(e.target.value) }}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select><br />

                    <strong>Pricing</strong><br/>
                    <input type='text' autoComplete='off' onChange={e => { setPrice(e.target.value) }} placeholder='Pricing' className='left-inp' required /><br />
                    <div className='btn-box'>
                    <button onClick={onback}>Back</button>
                        <button type='button' onClick={onRegisterClick}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterDonor

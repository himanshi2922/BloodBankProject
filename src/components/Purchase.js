import React,{useEffect} from 'react'
import axios from 'axios'
import './css/purchase.css'
import tick from './css/images/tick_2.png'
import profile_pic from './css/images/profile_pic.png'
import {Link} from 'react-router-dom'

const Purchase = (props) =>{
 
    var id =props.location.id

    useEffect(()=>{
        axios.delete(global.config.ip.ip_db+'/dataHandle/deletedata/'+id)
        .then(res=>{
            console.log('item purchased so removed')
        })
    })
    return(
        <div className='purchase-body'>
            <div className='purchase-container'>
            <img src={tick} className='purchase-tick' alt='registration done'/>
            <h1 className='text-purchase'>Your request was successful</h1>
            <p className='text-purchase-2'>Your donor details are</p>
            <img src={profile_pic} alt='profile pic' className='profile-pic-donor'></img>
            <p className='text-purchase-3'>{props.location.fname}{' '}{props.location.lname}<br/>
            {props.location.email}<br/>
            {props.location.phone}<br/>
            {props.location.blood}<br/>
            {props.location.city}{','}{props.location.state}<br/>
            {'₹'}{props.location.price}<br/></p>
            <Link to='/home' className='purchase-btn'>Go Back Home</Link>
            </div>
        </div>
    )
}

export default Purchase
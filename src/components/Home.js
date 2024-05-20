import React,{useEffect, useState} from 'react'
import logo from './css/images/logo.png'
import './css/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

function Home()
{
    const [vis_count,setVis] = useState('0')
    const [search,setSearch] = useState('')
    const [blood_type,setBlood] = useState('ALL')

    const [name,setName] = useState('')

    const[em,setEm]=useState('')

    useEffect(()=>{
        document.title='Blood Bank'

        const cookies = new Cookies()
        setEm(cookies.get('email'))

        axios.get(global.config.ip.ip_db+'/dataHandle/getLogin', {
            params: {
                email: em
            }
        })
        .then((res)=>{
            setName(res.data[0].name)
        })

        axios.get(global.config.ip.ip_db+'/dataHandle/getpwd')
        .then((res)=>{
            setVis(res.data.length)
        })

    })

    function logout()
    {
        window.location.replace(global.config.ip.ip_react+'/login')
    }

    function change_pw()
    {
        window.location.replace(global.config.ip.ip_react+'/resetpw')
    }

        
    return(
        <div className='main'>
            <nav>
            <img src={logo} alt="Logo" className='logo'/>
            <ul className='nav-links'>
                <li><a className='register-donor' href='/aboutus'>About Us</a></li>
                <li><div className='dropdown'>
                    <button className = "dropbtn">Hello, {name}</button>
                    <div className='dropdown-content'>
                        <a onClick={change_pw}>Change password</a>
                        <a onClick={logout}>Log out</a>
                    </div>
                    </div></li>     
            </ul>
            </nav>
            
        

        <div className='content'>
            <h1>Find blood donor</h1>
            <form>
                <input autoComplete='off' type='text' id='search-text' placeholder='Enter city or blood group' onChange={e=>{setSearch(e.target.value)}}/>
                <select id='search-blood-grp' onChange={e=>{setBlood(e.target.value)}}>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>
                    <option value='ALL' selected>ALL</option>
                </select>
               <Link className='home-btn'to ={{pathname:'/viewdonor',state:search,blood_g:blood_type}}>Search</Link>        
            </form>
            <div className='register-content'>
            <Link className = 'register-donor'to ='/donor'>Register Donor</Link>
            </div>
        </div>
        <div className='footer-home'>
                <h4 className='footer-text'> &nbsp;Visitor counter : {vis_count}</h4>
            </div>
            
        </div>
        
    )
}

export default Home
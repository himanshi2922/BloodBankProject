import React,{useState,useEffect} from 'react'
import './css/viewdonor.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ViewDonor=(props)=>{
   
    var search_query = props.location.state
    var search_query_b = props.location.blood_g
    const [data,setData] = useState([{
        _id:'',
        first_name:"",
        last_name:"",
        type:'',
        email:"",
        phone:"",
        blood_grp:"",
        city:"",
        state:"",
        prior_disease:"",
        diabetic:"",
        price:""
    }])

    const [search,setSearch] = useState(search_query)
    const [blood,setBlood] = useState(search_query_b)

    useEffect(()=>{
        axios.get(global.config.ip.ip_db+'/dataHandle/fetchall',{
            params:{
                search:search,
                blood_grp:blood
            }
        })
        .then(res=>setData(res.data))
})

    return(
        <div>
        <div className='donor-view-header'>
            <input className='search-input' autoComplete='off' placeholder='Search query here' type='text' onChange={e=>setSearch(e.target.value)} defaultValue={search_query}/>
            <select className='search-select' id='search-blood-grp' defaultValue={search_query_b} onChange={e=>{setBlood(e.target.value)}}>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>
                    <option value='ALL'>ALL</option>
                </select>
                <Link to='/home' className='home-btn-view'>Go back to home</Link>
        </div>
        <div className='donor-table'>
            <table>
                <tr>
                    
                    <th className='heading'>Name</th>
                    <th className='heading'>Type</th>
                    <th className='heading'>Email</th>
                    <th className='heading'>Phone</th>
                    <th className='heading'>Blood Group</th>
                    <th className='heading'>City</th>
                    <th className='heading'>State</th>
                    <th className='heading'>Prior Disease</th>
                    <th className='heading'>Diabetic</th>
                    <th className='heading'>Price</th>
                </tr>
                {data.map((val,key)=>{
                    return(
                        <tr key = {key}>
                            <td className='entries'>{val.first_name}{' '}{val.last_name}</td>
                            <td className='entries'>{val.type}</td>
                            <td className='entries'>{val.email}</td>
                            <td className='entries'>{val.phone}</td>
                            <td className='entries'>{val.blood_grp}</td>
                            <td className='entries'>{val.city}</td>
                            <td className='entries'>{val.state}</td>
                            <td className='entries'>{val.prior_disease}</td>
                            <td className='entries'>{val.diabetic}</td>
                            <td className='entries'>{'₹'}{val.price}</td>                            
                        </tr>
                    )
                })
                }
            </table>
        </div>
        {data.length===0 && <h1 className='no-data'>No donors found</h1>}
        </div>
    )
}


export default ViewDonor
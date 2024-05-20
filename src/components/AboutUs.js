import React from 'react'
import './css/aboutus.css'

function AboutUs() {

    function back_to_home()
    {
        window.location.replace(global.config.ip.ip_react+'/home')
    }

    return (
        <div className='abt-main'>
            <div className='left-col-abt'>
            <button onClick={back_to_home}>back</button>
                <div className='content-box-abt'>
                    <h1>Blood Bank Management System Using Cloud Computing v1.0</h1>
                </div>
            </div>
            <div className='right-col-abt'>
                <div className='content-box-abt-2'>
                    A Project by Himanshi Hora <br/><br/>
                    Built under the supervision of Dr.Awadhesh Kumar<br/><br/>
                    Images by Karolina Graboswka - <a href ='https://www.pexels.com/@karolina-grabowska/'>https://www.pexels.com/@karolina-grabowska/</a><br/><br/>
                    Icons provided by Icons8 <a href='https://icons8.com/'>https://icons8.com/</a>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutUs
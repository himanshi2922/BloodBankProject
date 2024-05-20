import { React } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './css/intro.css'
import image1 from './css/images/i1.jpg'
import image2 from './css/images/i2.jpg'
import image3 from './css/images/i3.jpg'

function Intro() {

    const images = [{url:image1},{url:image2},{url:image3}]
    function to_login() {
        window.location.replace(global.config.ip.ip_react + '/login')
    }
    return (
        <div className='intro-main'>
            <div className='left-col-intro'>
                <div className='slideshow-container'>
                    <SimpleImageSlider width={950} height={500} images = {images} showBullets={false} showNavs = {true} autoPlay={true}/>                   
               </div>
            </div>
            <div className='right-col-intro'>
                <div className='content-box-intro'>
                    <h1>Blood Bank Management System</h1>
                    <p>Blood Bank Management System which is built to serve those in need of blood. It manages and maintains the record of all the blood donors across the country and delivers to the recipient in time of need.Individuals, NGOs, Hospitals can enroll themselves for donation and anyone in need of blood could get in touch easily through our website. This web application has been made with a user friendly interface, so that anyone can use it and as a security we have provided admin username and password.</p>
                    <button type="button" onClick={to_login}>Sign in/Sign up</button>
                </div>
            </div>
        </div>

    )
}

export default Intro
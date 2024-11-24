import React from 'react'
import './Footer.css'
import Image from 'next/image'






const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-top'>
     <div className='footer-left'>

    <Image src ="/p.logo00.png" 
        width={100} 
     height={100}
    alt="logo"/>

   <p>I Am Javeria Iftikhar web developer</p>

   </div>
  
   <hr/>

<p className ='footer-bottom-left'>2023 Alex bannet all rights</p>
 <div className='footer-bottom-right'>
     <p>Terms of services</p>
   <p>Privacy Policy</p>
   <p>Connect with Me</p>

     </div>
    </div>

     </div>
    
  )
}

export default Footer;


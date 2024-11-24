import React from 'react';
import './Hero.css'
import Image from 'next/image';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <Image src="/h2.img.png" 
width={400} 
height={400} 
alt="hero image"/>



<h1><span>I Am Javeria Iftikhar </span> web developer </h1>
         <p>Welcome to my portfolio I m a dedicated web 
          developer with a knack for
           crafting beautiful functional websites
         that elevate brands and engage users</p>
    

        
        </div>     




    




  )
}

export default Hero
import React from 'react'
import './About.css'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-tittle'>
            <h1>ABOUT ME</h1>
            
</div>
   <div className='about-sections'>
    <div className='about-left'>
        <Image src ="/left3.img.png" 
        width={400}
        height={400}
        alt=""/>
</div>

<div className='about-right'>
    <div className='about-para'>
 <p>Passionate web developer skilled in creating dynamic user-friendly<br/> websites  Committed to
 blending innovative design with seamless<br/> functionality to enhance user experiences
 Dedicated to continuous learning and leveraging the latest technologies<br/>to deliver
 outstanding digital solutions
 </p>

</div>


<div className='about-skills'>
    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
    <div className='about-skill'><p>React.js</p><hr style={{width:"60%"}}/></div>
    <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
    <div className='about-skill'><p>Next.js</p><hr style={{width:"50%"}}/></div>
    
</div>
</div>
</div>
       


    </div>
  )
}

export default About
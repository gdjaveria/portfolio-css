import React from 'react'
import './MyProject.css'
import Image from 'next/image'
import myWork_data from './MyWorkData';


import { FaArrowRight } from "react-icons/fa";


const MyProject = () => {
  return (
    <div id='projects' className='myWork'>
<div className='myWork-tittle'>
    <h1>My Projects</h1>
   
</div>

<div className="myWork-container">
    {myWork_data.map((Work,index)=>{
        return <Image key={index} src={Work.w_img} alt= ""/>
    })}
</div>


<div className='myWork-showmore'>
    <p>show more</p>
    <FaArrowRight />

</div>



    </div>
  )
}

export default MyProject;
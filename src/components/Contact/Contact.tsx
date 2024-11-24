import React from 'react'
import "./Contact.css"

import { MdMarkEmailUnread } from "react-icons/md";

import { MdAddCall } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-tittle'>
            <h1>Get In Touch</h1>
            </div>

<div className='contact-section'>
    <div className='contact-left'>
        <h1>Let s Talk</h1>
<p>I m currently avaliable to take on new projects so feel free to send me a message 
    about anything that you want me to work on You can contact anytime</p>
        <div className='contact-details'>

        <div className='contact-detail'>
        <MdMarkEmailUnread/> <p>abc@gmail.com </p>
        </div>
       <div className='contact-detail'>
       <MdAddCall /><p>123-557-999 </p>
       </div>
        <div className='contact-detail'>
        <IoLocation /><p>street city country </p>
        </div>
        </div>

    </div>

<form className='contact-right'>
    <label htmlFor=''>your Name</label>
    <input type='text' placeholder='enter your name' name='name'/>

    <label htmlFor=''>your Email</label>
    < input  type='text' placeholder='enter your email' name='name'/>

    <label htmlFor=''> Write Your Message</label>
    < textarea name="message" id="message" placeholder='enter your message'></textarea>

    <button type='submit' className="contact-submit">Submit Now</button>
</form>

</div>









    </div>
  )
}

export default Contact;
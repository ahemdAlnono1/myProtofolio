import React from 'react'
import palestine from "../assets/palestine.png";

function Contact() {
  return (
    <div className='contact' id="contact">
      <div className='contact-form'>
        <h1>Contact me</h1>
        <form action="" id="form">
          <input type="text" name="name" placeholder='name'/>
          <input type="email" name="email" placeholder='Email'/>
          <textarea name="message"cols={20} rows={20} placeholder='message'></textarea>
          <button id="send">Send</button>
        </form>
      </div>
      <div className="contact-photo">
          <img src={palestine} alt="" />
      </div>
    </div>
  )
}

export default Contact
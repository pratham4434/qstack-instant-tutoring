import React from 'react'
//import possibilityImage from "../../assets/possibility.png";
import "./video.css"
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { BsFullscreen } from 'react-icons/bs';
//import Videochatnav from './Videochatnav';
const Video = () => {
    
  return (
    <div className="main_div" id="possibility">
    
     <div className='gpt3__possibility-image'>
     <div className='icons'>
            <FiPhoneCall className='icon_inter1'/>
            <MdOutlineKeyboardVoice className='icon_inter2'/>
            <FiSend className='icon_inter3'/>
            <BsFullscreen className='icon_inter4'/>
        </div>
     </div>
     
    
      <div className="gpt3__possibility-content">
      
      <div className="gpt3__ask-content__input">
        <div className="gpt3__ask-content__input_internal">
       
        <img className="gpt3__ask-content__input_image" src="https://www.shutterstock.com/image-photo/woman-sit-on-sofa-living-260nw-1694685361.jpg" alt="" />
          
        </div>
        <div className='chatbox'>
        <div className="gpt3__ask-content__input_internal-btn">
        <section className="msger">
       <div className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> SimpleChat
           </div>
             <div className="msger-header-options">
      <span><i className="fas fa-cog"></i></span>
    </div>
  </div>

   <div className="msger-chat">
    <div className="msg left-msg">
      <div
       className="msg-img"
       
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">BOT</div>
          <div className="msg-info-time">12:45</div>
        </div>

        <div className="msg-text">
          Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
        </div>
      </div>
    </div>

    <div className="msg right-msg">
      <div
       className="msg-img"
       
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Sajad</div>
          <div className="msg-info-time">12:46</div>
        </div>

        <div className="msg-text">
          You can change your name in JS section!
        </div>
      </div>
    </div>
  </div>

  <form className="msger-inputarea">
    <input type="text" className="msger-input" placeholder="Enter your message..."/>
    <button type="submit" className="msger-send-btn">Send</button>
  </form>
</section>
        </div>
        
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Video
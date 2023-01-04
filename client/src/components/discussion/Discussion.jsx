import React from 'react'
import "./discussion.css"
const Discussion = () => {
  return (
    <section className="discussion_main">
  <div className="discussion_container">
    <div className="discussion_container2">
      <img alt="ecommerce" className="discussion_img" src="https://i.ytimg.com/vi/r4TgqWbKRtA/maxresdefault.jpg"/>
      <div className="discussion_container3">
        <h2 className="discussion_title">STUDENT USERNAME</h2>
        <h1 className="discussion_subtitle">Discussion Title</h1>
        
        <p className="discussion_description">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="discussion_tech">
         
          <div className="discussion_tech1">
            <span className="discussion_techtitle">Tech Stack</span>
            <div className="discussion_techoption">
            <h2 className="discussion_techoption_input">
                Java
              </h2>
             
            </div>
          </div>
        </div>
        <div className="discussion_button">
          
          <button className="discussion_button1">Button</button>
          <button className="discussion_button2">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Discussion


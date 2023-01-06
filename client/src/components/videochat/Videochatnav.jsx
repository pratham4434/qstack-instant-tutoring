import React,{useState} from 'react'
import "./videochatnav.css"

const Videochatnav = () => {
    const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 50){
      setColor(true)
    } else {
      setColor(false)
    }
  };
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color? "gpt3__navbar gpt3__navbar-bg" : "gpt3__navbar"}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p>
            <a href="/">QStack</a>
          </p>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Videochatnav
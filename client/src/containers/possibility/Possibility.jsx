import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
import {Link} from "react-router-dom"
const Possibility = () => (

  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Ask your Question</h1>
      <p>Type your question in detail or post an image of the question and select the language.</p>
      <div className="gpt3__ask-content__input">
        <div className="gpt3__ask-content__input_internal">
          <input
            className="gpt3__ask-content__input_text"
            type="text"
            placeholder="Type Your Question"
          />
          <input
            className="gpt3__ask-content__input_image"
            type="file"
            placeholder="Add an Image"
            
          />
        </div>
        <div className="gpt3__ask-content__input_internal-btn">
        <select name="cars" id="cars">
          <option value="Others">Others</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
        </select>
        <Link to="/discusssion">
        <button   type="button">Submit</button>
        </Link>
        </div>
      </div>
    </div>
    
  </div>
  
);

export default Possibility;

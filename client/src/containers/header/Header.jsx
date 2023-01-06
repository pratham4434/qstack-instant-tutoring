import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.svg";
import "./header.css";
import {Link} from "react-router-dom"
const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Get solution for your Coding doubts with 1-on-1 live sessions
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="gpt3__header-content__input">
         <Link to="/video">
        <button  className="gpt3__header-content__input-ask" type="button">
        
          ASK NOW
        </button>
        </Link>
        
        <button className="gpt3__header-content__input-play" type="button">
          ▶
        </button>
        <div className="gpt3__header-content__input-text">
          <p>See how it works!</p>
        </div>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>100+ available teachers available 24/7</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="" />
    </div>
  </div>
);

export default Header;

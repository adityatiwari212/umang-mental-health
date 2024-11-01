import React from 'react'
import "../styles/community.css"
import image from "../../../images/image.png"
import "../styles/button.scss"
import { useNavigate } from 'react-router-dom';

function Community() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/community`);

  }
  return (
    <div className='community-container'>
        <div className="headline-container">

        <div className="headline">
            <p> Join the Community</p>
        </div>
        <div className="sub-headline">
            <p>Connect with like-minded individuals and support each other in your mental wellness journey. Explore various guides and resources tailored to help you thrive.</p>
        </div>
        <div className="button-wrapper">
  <button className="subscribe-button" onClick={handleClick}>Head to Community
  </button>
</div>
        </div>
        <div className="community-image">
            <img src={image}></img>
        </div>
    </div>
  )
}

export default Community
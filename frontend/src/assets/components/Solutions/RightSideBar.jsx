import React from 'react';
import "./styles/RightSideBar.css"
function RightSideBar() {
  return (
    <div className="right-sidebar">
      
      <div className="take-test">
        <div className="p">
          <p>
            Feeling unsure about your mental health? Take our quick mental health assessment to get your mental health score.
          </p>
        </div>
        <button>Take Test</button>
      </div>
      
      <div className="access-community">
        <div className="p">
          <p>
            Join our supportive community where you can share experiences, ask questions, and connect with others who understand what you're going through.
          </p>
          <button>Head to Community</button>
        </div>
      </div>
      
      <div className="access-blog">
        <div className="p">
          <p>
            Stay informed with the latest articles on mental health, well-being, and self-care. Explore our blog for insights and advice from mental health professionals.
          </p>
          <button>Read Our Blog</button>
        </div>
      </div>
      
      <div className="more-test">
        <p>Looking for more specific assessments? Try our tests for:</p>
        <button>Anxiety</button>
        <button>PTSD</button>
        <button>Depression</button>
        <button>Bipolar Disorder</button>
      </div>
      
    </div>
  );
}

export default RightSideBar;

import React from "react";
import Blogs from "./Blogs";
import "../styles/Home.css";
import NavBar from "./NavBar";
import mentalHealthImage from '../../../images/mental-health-1.png';
// import Test from "./Home/Test";
import Test2 from "./Test2";
import Community from "./Community";
// import Slider from "./Home/Slider";
import Solutions from "./Solutions";
import Doctors from "./Doctors";
import Footer from "../../Footer/Footer";
import { ChakraProvider } from '@chakra-ui/react';
import WithSpeechBubbles from "./Testimonials";
export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="main-home-container">
        <div className="take-test">
          <div className="take-test-image">
            <img src={mentalHealthImage} alt="Mental Health Assessment" />
          </div>
          <div className="take-test-intro">
            <p>
              Did you know that mental health disorders affect over 1 billion
              people globally? Take our quick mental health assessment to gain
              insights into your well-being and take proactive steps towards
              mental wellness.
            </p>
            <div className="button-take-test">
              <button className="button-test">Get Your Mental Health Score</button>
            </div>
          </div>
        </div>
        

        <div className="blogs-container">
          <Blogs />
        </div>
        <Test2/>
        <Community/>
       <Doctors/>
       <Solutions/>
       
       <ChakraProvider>
        <WithSpeechBubbles/>
       </ChakraProvider>
       <Footer/>
      </div>
    </>
  );
}

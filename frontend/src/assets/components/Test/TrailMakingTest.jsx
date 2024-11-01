import React, { useState, useEffect } from "react";
import "./styles/TMT.css";

function TrailMakingTest({ setGame3, setGame4, setFinalScore }) {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  useEffect(() => {
    console.log("start changed to ", start);
  }, [start]);

  return (
    <div className="header_tmt">
      {!start && (
        <div className="_trailMaking-description">
          <p>
            Welcome to the Trail Making Test! In this test, your task is to
            click the circles numbered from 1 to 20 in ascending order as
            quickly as possible. Be careful not to click out of sequence or make
            incorrect clicks. The circles are randomly positioned, and you may
            need to strategize your clicks for optimal performance.
          </p>
          <p>
            Click on each circle to select it. Green indicates a correct click,
            and red indicates an incorrect sequence. You can undo a click by
            clicking the same circle again. Once you believe you have completed
            the sequence, click the "Submit" button. Your score will reflect
            both the number of correct clicks and the time taken.
          </p>
          <button className="button_submit_tmt" onClick={handleStart}>
            Start Test
          </button>
        </div>
      )}

      {start && (
        <MainComponent
          setFinalScore={setFinalScore}
          setGame3={setGame3}
          setGame4={setGame4}
        />
      )}
    </div>
  );
}

function MainComponent({ setGame3, setGame4, setFinalScore }) {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(null);
  const [right, setRight] = useState(0);
  const [stack, setStack] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [warning, setWarning] = useState(false);
  const [valueClicked, setValueClicked] = useState(0);

  const numberOfCircles = 20;
  useEffect(() => {
    if (stack.length !== 0 && !flag) {
      const restOfArray = stack.slice(0, stack.length - 1);
      if (stack.length > 1 && restOfArray.includes(stack[stack.length - 1])) {
        setFlag(true);
        const index = restOfArray.indexOf(stack[stack.length - 1]);
        let high = restOfArray[restOfArray.length - 1];
        let low = stack[stack.length - 1];
        while (high >= low) {
          let circle = document.getElementById(`circle${high}`);
          circle.style.backgroundColor = "white";
          high--;
        }
        setStack(restOfArray.slice(0, index));
        return;
      }

      if (stack.length === 1 && stack[0] === 1) {
        setTime(Date.now());
        const circle = document.getElementById(`circle${stack[0]}`);
        circle.style.backgroundColor = "green";
        setRight((prevRight) => prevRight + 1);
      } else if (stack[stack.length - 1] < stack[stack.length - 2]) {
        setFlag(true);
        stack.pop();
        setStack(stack);
        return;
      } else if (stack[stack.length - 1] === stack[stack.length - 2] + 1) {
        const circle = document.getElementById(
          `circle${stack[stack.length - 1]}`
        );
        circle.style.backgroundColor = "green";
        setRight((prevRight) => prevRight + 1);
      } else {
        for (
          let i = stack.length === 0 ? 1 : stack[stack.length - 2] + 1;
          i <= stack[stack.length - 1];
          i++
        ) {
          const circle = document.getElementById(`circle${i}`);
          circle.style.backgroundColor = "red";
        }
      }
    } else {
      setFlag(false);
    }
  }, [stack]);

  useEffect(() => {
    if (valueClicked !== null) {
      setStack((prevStack) => [...prevStack, valueClicked]);
    }
  }, [valueClicked]);

  useEffect(() => {
    setStack([]);
    createCircle(numberOfCircles);
  }, []);

  function overlap(posx, posy) {
    const container = document.getElementById("container");
    console.log(container.getElementsByClassName("circle_tmt").length);
    for (const checkCircle of container.getElementsByClassName("circle_tmt")) {
      const rect1 = { x: posx, y: posy, width: 70, height: 70 };
      const rect2 = checkCircle.getBoundingClientRect();
      if (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      ) {
        return true;
      }
    }
    return false;
  }

  function createCircle(numberOfCircles) {
    const container = document.getElementById("container");
    if (!container) {
      console.error("Container not found");
      return;
    }
    container.innerHTML = "";
    for (let i = 0; i < numberOfCircles; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle_tmt");
      circle.id = `circle${i + 1}`;
      
      let posx, posy;
      posx = Math.random() * (container.clientWidth - 50);
      posy = Math.random() * (container.clientHeight - 50);
      console.log("posx is " , posx , "posy is " , posy , "cont width" , container.clientWidth , "cont height" , container.clientHeight) ;
      while (true) {
        if (
          posx < 0 ||
          posy < 0 ||
          posx + 50 > container.clientWidth ||
          posy + 50 > container.clientHeight
        ) {
          
          posx = Math.random() * (container.clientWidth - 50);
          posy = Math.random() * (container.clientHeight - 50);
        } else if (overlap(posx, posy)) {
          
          posx += 50;
          posy += 50;
        } else {
          
          break;
        }
        
      }
      circle.style.left = `${posx}px`;
      circle.style.top = `${posy}px`;
      circle.textContent = i + 1;

      circle.onclick = () => {
        const value = parseInt(circle.textContent);
        const circleElement = document.getElementById(`circle${value}`);
        setValueClicked((prevValueClicked) => {
          if (prevValueClicked == value) {
            circleElement.style.backgroundColor =
              circleElement.style.backgroundColor === "green"
                ? "white"
                : "green";
            return prevValueClicked;
          }
          return value;
        });
      };
      container.appendChild(circle);
    }
  }

  const handleSubmit = () => {
    if (right === numberOfCircles || warning) {
      console.log("curr time is " , Date.now()/1000 , "-" , Date.now() , "start time is " , time/1000 , "-" , time , );
      let finalTime = (Date.now() - time) / 1000;
      console.log("final time is" , finalTime);
      setTime(finalTime);
      setFinalScore((prevFinalScore) => {
        const score = (
         ( prevFinalScore +
          (finalTime > 75
            ? -5 - (numberOfCircles - right)
            : finalTime > 50
            ? -(numberOfCircles - right)
            : finalTime > 40
            ? 5 + Math.min(10, right)
            : 10 + right)
        ) *20/30 );
        console.log("tmt score is" , score);
        return score;
      });

      setShowScore(true);
      const x = setTimeout(() => {
        setGame3(false);
        setGame4(true);
      }, 500);
    } else {
      setWarning(true);
    }
  };

  return (
    <>
      <div id="container" className={`trail-container_tmt${2}`}>
      
      </div>

      {valueClicked === numberOfCircles && !showScore && (
        <button className="button_submit_tmt" onClick={handleSubmit}>
          {warning
            ? "You have a few wrong clicks. You can undo them! If you still want to proceed with the submission, Click Here"
            : "Submit"}
        </button>
      )}
      
    </>
  );
}

export default TrailMakingTest;

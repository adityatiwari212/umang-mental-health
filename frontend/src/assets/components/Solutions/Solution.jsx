import React from 'react'
import { useState } from 'react'
import NavBar from '../Home/components/NavBar'
import RightSideBar from './RightSideBar'
import "./styles/Solution.css"
import Modal from '../Modal'
function Solution() {
    const [open , setOpen] = useState(false);
  return (
    <>
    <NavBar/>
    <div className="solutions-container">
        <div className="left-sidebar">
            <div className="item" onClick={()=>{handleClick(1)}}>Meditation</div>
            <div className="item" onClick={()=>{handleClick(2)}}>Journalling</div>
            <div className="item" onClick={()=>{handleClick(3)}}>Self Care</div>
            <div className="item" onClick={()=>{handleClick(4)}}>Spirutual Practice</div>
            <div className="item" onClick={()=>{handleClick(5)}}>Social Connections</div>
            <div className="item" onClick={()=>{handleClick(6)}}>Mental Therapy</div>
            <button onClick={()=>{setOpen(true)}}>Open</button>
        </div>
        <div className="solutions-centre">
            <p>
             Journaling: A Guide to Self-Discovery and Growth

Journaling is a powerful tool for self-expression, reflection, and personal growth. It involves writing down your thoughts, feelings, experiences, and dreams in a private journal. Here's a step-by-step guide to help you start journaling and reap its benefits:

1. Choose Your Journal:
    Physical or digital: Decide whether you prefer a traditional paper journal or a digital app. Consider factors like portability, organization, and your personal preference.
    Size and style: Select a journal that feels comfortable and inviting. The size and style can influence your writing experience.

2. Dedicate Time:
    Consistency is key: Set aside a specific time each day for journaling. Consistency helps create a habit and ensures regular practice.
    Find your ideal time: Experiment to determine when you're most focused and relaxed. Whether it's in the morning, evening, or another time that suits your schedule, make it a priority.

3. Start Writing:
    Don't overthink: Simply begin writing whatever comes to mind. There are no rules or expectations.
    Explore your thoughts: Dive deep into your thoughts and feelings. Express yourself honestly and without judgment.
    Use prompts: If you're stuck, use journaling prompts to spark ideas. These can include questions like "What am I grateful for today?" or "What are my goals for the future?"

4. Reflect and Analyze:
    Review your entries: Periodically revisit your journal entries to see patterns, growth, and changes in your thoughts and feelings.
    Identify themes: Look for recurring themes or topics that emerge in your writing. Understanding these themes can provide valuable insights into yourself.
    Learn from your experiences: Use your journal as a tool for self-reflection. Analyze your experiences, learn from mistakes, and celebrate your achievements.

Benefits of Journaling:
    Stress reduction: Journaling can help reduce stress and anxiety by providing an outlet for emotional expression.
    Improved mental health: Regular journaling has been linked to improved mental health, including reduced symptoms of depression and anxiety.
    Enhanced self-awareness: Journaling helps you understand your thoughts, feelings, and behaviors, leading to greater self-awareness.
    Personal growth: By exploring your experiences and setting goals, journaling can support personal growth and development.
    Creativity boost: Journaling can stimulate creativity and inspire new ideas.

Remember, journaling is a personal journey. There's no right or wrong way to do it. The most important thing is to be consistent, honest, and open-minded. Enjoy the process of self-discovery and let your journal be a safe space for expression and growth.

            </p>
        </div>
        {open && <Modal childeren={<Testing setOpen={setOpen} />} setOpen={setOpen}/>
            
       }
        <RightSideBar/>
    </div>
    </>
  )
}
const Testing = ({setOpen})=>{
    return (
        <>
        <div className="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, facere.
        </div>
        <button onClick={()=>{setOpen(false)}}>Close</button>
        </>
    )
}
export default Solution
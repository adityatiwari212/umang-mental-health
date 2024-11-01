
import React, { useEffect, useState } from 'react'
export default function Timer({time2go}) {
   const [time , setTime] = useState(time2go);
  useEffect(() => {
      const countdown = setInterval(() => {
         setTime(prevTime => {
            if (prevTime <= 0) {
               clearInterval(countdown); // Stop the countdown when time reaches 0 or below
               return 0; // Return 0 to display 0 after countdown ends
            } else {
               return prevTime - 1; // Decrement time if greater than 0
            }
         });
      }, 1000);

      // Clean up setInterval when component unmounts
      return () => clearInterval(countdown);
   }, []); 
  return (
    <p className='timer_time'>
        {time ? time : 0}
    </p>
  )
}

// Log to console
// console.log('Hello console')
import React, { useState } from 'react'
import './counter.css'
const contunter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have click {count} time</p>
        <div id='bt'>
          <button onClick={() => { setCount(count+1) }} >
            Click Me
        </button>
        </div>
    </div>
  )
}

export default contunter
import React, { useState } from 'react'
import './style.css'
import namew from  '../assets/react.svg'
import Usercards from '../component/Usercards'
export default function header() {
    
    function ButtonClick(){
        setclick(!click);
        
    }

    const [hover, sethover] = useState(false);
    const [click, setclick] = React.useState(false);
  return (
    <div className='header'>

        <div className='logo'>
            <img src={namew} alt="React image" />
        </div>
        <div className='nav'>
        <a href="" 
        onMouseEnter={() => sethover(true)} 
        onMouseLeave={ () => sethover(false)}
        >
        Home</a>
        <a href="">Menu</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
        </div>

        <div onClick={ButtonClick} className='rightnav'>
            <button  className='butt'> {click? 'close' : 'Order Now'} </button>
        </div>
        
        {click ? <Usercards/> : null}
        {hover && <Usercards/>}
        
    </div>
  )
}

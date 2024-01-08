import './GrinwichTime.css'
import { useState, useEffect } from 'react';

function GrinwichTime() {
    const [grinwichTime, setGrinwichTime] = useState('00:00:00')

    useEffect(()=>{
        const grinwTimer = setInterval(()=>{
            setGrinwichTime(prev => prev = new Date(new Date().getTime() + new Date().getTimezoneOffset()*60000).toLocaleTimeString())
        }, 1000)
        return()=>{
            clearInterval(grinwTimer)
        }
    },[])

  return (
    <div className='grinwitch-timer'>
        <div className='grinwitch-timer__title'>Время по Гринвичу</div>
        {grinwichTime}
    </div>
  )
}

export default GrinwichTime;

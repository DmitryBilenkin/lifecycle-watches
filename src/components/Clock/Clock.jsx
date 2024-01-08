import './Clock.css'
import { useEffect, useState } from 'react'

function Clock(props) {

const [currentTime, setCurrentTime] = useState('loading...')


useEffect(()=>{
    const currTimer = setInterval(() => {   
    setCurrentTime(prev => prev = new Date(new Date().getTime() + new Date().getTimezoneOffset()*60000 + props.timeZone*60*60000).toLocaleTimeString())
  }, 1000)

  return ()=>{
      clearInterval(currTimer)  }
},[])


const deleteClockHandler = ()=> {
  props.deleteClock(props.ind)
}

  return (
    <div className='clock-container'>
      <div className='clock-name'>
        {props.name}
      </div>
      <div className='clock-time'>
        {currentTime}
      </div>
      <div className='bth__delete-clock' onClick={deleteClockHandler}>X</div>
    </div>
  )
}

export default Clock

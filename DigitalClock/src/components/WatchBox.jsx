import React, { useEffect, useState } from 'react'
import '../App.css'

function WatchBox() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(new Date())  
    }, 1000)

    return () => {
      clearInterval(intervalTime)  
    }
  }, [])

  return (
    <div className="watchContainer">
      <div className="time">{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</div>
      <div className="date">{`${time.getDate()} : ${time.getMonth() + 1} : ${time.getFullYear()}`}</div>
    </div>
  )
}

export default WatchBox

import React from 'react'
import  "./info.css"
const Info = () => {
    const display = () =>{
        const List = ["Ali", "Frah", "Jamac"]
        const num = Math.floor(Math.random()*3);
        return List[num];
    }
    
  return (
    <div className='info'>
      <div>{display()}</div>
      <div>Math Expo</div>
      <div>$90</div>
    </div>
  )
}

export default Info

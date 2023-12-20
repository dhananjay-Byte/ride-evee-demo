import React from 'react'
import './airport.css'
function Airport() {
  return (
    <div className='airport-container'>
            <div className='inputs'>
                <div>
                    <h4>from</h4>
                    <input style={{width:'312.5px'}} type='text' placeholder='Start Tpying City'></input>
                    <img src='Icon.png'/>
                </div>
                <div>
                    <h4>Pick Up Date</h4>
                    <input style={{width:'312.5px'}} type="date" placeholder='Start Tpying Date'></input>
                </div>
                <div>
                    <h4>Pick Up At</h4>
                    <input style={{width:'312.5px'}} type="time" placeholder='Start Tpying Time'></input>
                </div>
            </div>
            
            <div className='airport-input'>
                    <h4>Trip Type</h4>
                    <input type="text" placeholder='Choose Airports'></input>
                    <img src='airplane-logo.png'/>
            </div>
            
    </div>
  )
}

export default Airport
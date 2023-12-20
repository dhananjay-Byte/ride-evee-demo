import React from 'react'
import './outstation.css'
function Outstation() {
    return (
        <div>
            <div className='trip'>
                <button>One Way</button>
                <button>Round Trip</button>
            </div>
            <div className='inputs'>
                <div>
                    <h4>from</h4>
                    <input type='text' placeholder='Start Tpying City'></input>
                    <img src='Icon.png' />
                </div>
                <div className='interchange'>
                    <img src='interchange.png' alt='interchange-logo' />
                </div>
                <div>
                    <h4>To</h4>
                    <input type="text" placeholder='Start Tpying City'></input>
                    <img src='Icon.png' />
                </div>
                <div>
                    <h4>Pick Up Date</h4>
                    <input type="date" placeholder='Start Tpying Date'></input>
                </div>
                <div>
                    <h4>Pick Up At</h4>
                    <input type="time" placeholder='Start Tpying Time'></input>
                </div>
            </div>
        </div>
    )
}

export default Outstation
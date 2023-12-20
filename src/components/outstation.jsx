import React, { useState } from 'react'
import './outstation.css'
function Outstation() {
    const [oneway, setoneway] = useState(true);
    const [roundway, setRoundWay] = useState(false);
    return (
        <div>
            <div className='trip'>
                <button className={oneway ? "alter" : ""} onClick={() => { setoneway(true); setRoundWay(false) }}>One Way</button>
                <button className={roundway ? "alter" : ""} onClick={() => { setoneway(false); setRoundWay(true) }}>Round Trip</button>
            </div>
            {
                oneway &&
                (
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
                )
            }
            {
                roundway && 
                (
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
                        <input style={{width:'147px'}} type="date" placeholder='Start Tpying Date'></input>
                    </div>
                    <div>
                        <h4>Return Date</h4>
                        <input style={{width:'147px'}} type="date" placeholder='Start Tpying Date'></input>
                    </div>
                    <div>
                        <h4>Pick Up At</h4>
                        <input style={{width:'147px'}} type="time" placeholder='Start Tpying Time'></input>
                    </div>
                </div>
                )
            }

        </div>
    )
}

export default Outstation
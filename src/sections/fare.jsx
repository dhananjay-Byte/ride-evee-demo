import React from 'react'
import './fare.css'
function Fare() {
    return (
        <div className='container'>
            <div className='car'>
                <img src='car-image.png' alt='car-image' />
            </div>
                <div className='fare-info'>
                    <img src='fare-logo.png' alt='fare' />
                    <p style={{color:"#38B000"}}>RETURN FARE, NOT FAIR!</p>
                    <span className='info'>
                    <p >Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.</p>
                    </span>
                </div>

                <div className='fare-info'>
                    <img src='driving.png' alt='drive' />
                    <p>NOW AVAILABLE ROUTES ARE!</p>
                    <p>Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
                </div>
        </div>
    )
}

export default Fare
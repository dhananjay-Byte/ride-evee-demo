import React, { useState } from 'react'
import './form.css'
import Outstation from './outstation'
import Local from './local';
import Airport from './airport';
function Form() {
  const [outstation,setoutstation] = useState(true);
  const [airport,setairport] = useState(false);
  const [local,setlocal] = useState(false);
  return (
    <div className='header-form'>
     
        <h1 className='header-title'>
            INDIA'S LEADING ONE-WAY INTER-CITY CAB SERVICE PROVIDER
        </h1>
        <div className='form-container'>
            <div className='button-types'>
              <button>Outstation</button>
              <button>Local</button>
              <button>Airport</button>
            </div>
            <div>
              {
               
                <Outstation/>
                
              }
              
            </div>
            <div className='explore alternate-colors'>
            <button>Explore Cabs</button>
            </div>
        </div>
    </div>
  )
}

export default Form
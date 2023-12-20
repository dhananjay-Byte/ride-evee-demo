import React, { useState } from 'react'
import './form.css'
import Outstation from './outstation'
import Local from './local';
import Airport from './airport';
function Form() {
  const [outstation,setoutstation] = useState(true);
  const [airport,setairport] = useState(false);
  const [local,setlocal] = useState(false);
  const changeState = (state)=>{
    if(state==='outstation'){
      setoutstation(true)
      setairport(false)
      setlocal(false)
    }
    else if(state==='local'){
      setoutstation(false)
      setairport(false)
      setlocal(true)
    }
    else if(state==='airport'){
      setoutstation(false)
      setairport(true)
      setlocal(false)
    }
  }
  return (
    <div className='header-form'>
     
        <h1 className='header-title'>
            INDIA'S LEADING ONE-WAY INTER-CITY CAB SERVICE PROVIDER
        </h1>
        <div className='form-container'>
            <div className='button-types'>
              <button className={outstation ? "alter" : ""} onClick={()=>changeState("outstation")}>Outstation</button>
              <button className={local ? "alter" : ""} onClick={()=>changeState("local")}>Local</button>
              <button className={airport ? "alter" : ""} onClick={()=>changeState("airport")}>Airport</button>
            </div>
            <div>
              {
               
               (outstation && <Outstation/>)
                
              }
              {
                   (local && <Local/>)
                  
              }
              {
                 (airport && <Airport/>)
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
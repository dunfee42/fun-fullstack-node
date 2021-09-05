// landing page
import React, { useEffect, useState } from 'react';
import UserForum from './UserForum';
import Tinder from './Tinder'

const Home = () => {
  const [ renderFlag, setRenderFlag ] = useState(true)
  const [ tinderValue, setTinderValue ] = useState(0) 
  const [ tendedTinder, setTendedTinder ] = useState([]) 

  useEffect(()=>{
    console.log(tendedTinder);
  },[tendedTinder])

    return(
      <div id='Home' className='container'>
        <div className='row'>
          <div className='col text-center'>
            <img src="/Tender.jpg" alt="Tender.... I mean tinder... I mean so me the money..." />
          </div>
          <div className='col text-center'>
            { renderFlag ? <UserForum renderFlag = {renderFlag} setRenderFlag = {setRenderFlag} tinderValue = {tinderValue} setTinderValue = {setTinderValue} tendedTinder = {tendedTinder} setTendedTinder = {setTendedTinder}/> : <Tinder renderFlag = {renderFlag} setRenderFlag = {setRenderFlag} tendedTinder = {tendedTinder}/> }
          </div>
        </div>
      </div>
    )
  }


export default Home;
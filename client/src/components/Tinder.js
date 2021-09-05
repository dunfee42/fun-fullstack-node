//Content display page
import React, { useEffect } from 'react';
import { Button } from 'reactstrap';

const Tinder = (props) => {

  const handleClick = () =>{
    props.setRenderFlag(!props.renderFlag)
  }
  
  return(
    <div>
      <div id="Tinder">
        <ul>
          {props.tendedTinder.map((item)=>{
            return <li> {item.type}(s) {item.quantity} </li>
          })}
        </ul>
        <Button onClick={handleClick} className="pull-right">click me</Button>
      </div>
    </div>
  )
} 

export default Tinder;
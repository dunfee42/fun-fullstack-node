import React from 'react';
import axios from "axios";
import {Label, Input} from 'reactstrap';

const UserForum = (props) => {

  const handleSubmit = (e) => {
    const amount = props.tinderValue; 
    axios.post('/', {amount})
    .then(res => {
      // console.log(res.data)
      props.setTendedTinder(res.data)
    })
    props.setRenderFlag(!props.renderFlag)
  }

  const handleChange = (e) => {
    props.setTinderValue(e.target.value)
  }

  return (
    <div>
        <Label for="usersNumber">Cash</Label>
        <Input
          type="number"
          step="0.01"
          name="number"
          id="usersNumber"
          placeholder="3.50"
          onChange={handleChange}
        />
        <Input type="submit" onClick={handleSubmit}></Input>
    </div>
  );
}

export default UserForum;
import './input.css';
import React from 'react';

const Input = (props : any) => {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} className='input-field'/> 
        {/* <input className="field" required type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} /> */}
    </div>
  )
}

export default Input;
import React from 'react';

const StepIndexItem = props => (
  <li className="step-item">
    <h4 className="ord"> {props.step.ord}.</h4>
    <div className="step-body">
      {props.step.body}
    </div>
    {/* <div className="step-media"> */}
      <video 
        className="step-media" 
        src={props.step.imageUrl} 
        loop webkit-playsinline="true" 
<<<<<<< HEAD
        playsInLine="true"
=======
        playsinline="true"
>>>>>>> df891b9cabf479713b9eb83794a8ab931b363045
        autoPlay="autoplay" 
        type="video/webm"
      />
    {/* </div> */}
  </li>
);
export default StepIndexItem;
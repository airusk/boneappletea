import React from 'react';

const StepIndexItem = props => (
  <li className="step-item">
    <h4 className="ord"> {props.step.ord}.</h4>
    <div className="step-body">
      {props.step.body}
    </div>
    <div className="step-image">step_{props.step.ord}.gif</div>
  </li>
);
export default StepIndexItem;
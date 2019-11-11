import React from 'react';

const StepIndexItem = props => (
  <li className="step-item">
    <label> {props.step.ord}
      <div className="step-body">
        {props.step.body}
      </div>
    </label>
  </li>
);
export default StepIndexItem;
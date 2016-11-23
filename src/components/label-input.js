import React from 'react';

const LabelInput = function(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        value={props.value}
        onChange={e => props.onChange(props.id, e.target.value)} />
    </div>
  );
};

export default LabelInput;

import React from 'react';

const TaskItem = function(props) {
  if (props.done) {
    return <strike>{props.description}</strike>;
  }
  else {
    return <span>{props.description}</span>;
  }
};

export default TaskItem;

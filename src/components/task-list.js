import React from 'react';

import TaskItem from './task-item';

const TaskList = function(props) {
  const items = props.tasks.map(function(task, index) {
    return <li key={index}><TaskItem description={task.description} done={task.done} /></li>;
  });

  return (
    <ul>
      {items}
    </ul>
  );
};

export default TaskList;

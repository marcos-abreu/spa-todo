import React from 'react';

const TaskInput = function() {
  const handleSubmit = function(evt) {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">Add Task:</label>
      <input id="task-input" type="text" />
    </form>
  );
};

export default TaskInput;

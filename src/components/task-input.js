import React from 'react';

const TaskInput = function(props) {
  const handleSubmit = function(evt) {
    evt.preventDefault();
  };

  const handlePress = function(evt) {
    const description = evt.target.value;
    if (evt.which === 13 && description.length > 0) {
      props.add(description);
      evt.target.value = '';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">Add Task:</label>
      <input id="task-input" type="text" onKeyDown={handlePress} />
    </form>
  );
};

export default TaskInput;

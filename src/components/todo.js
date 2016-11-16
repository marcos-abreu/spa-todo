import React from 'react';

import TaskInput from './task-input';
import TaskList from './task-list';

var tasks = [
  { id: 0, description: 'some task', done: false },
  { id: 1, description: 'another task', done: true },
  { id: 2, description: 'important task', done: false }
];

const Todo = function() {
  return (
    <div id="todo-page">
      <header>
        <h1>TODO App</h1>
      </header>
      <section className="input">
        <TaskInput />
      </section>
      <section className="list">
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
};

export default Todo;

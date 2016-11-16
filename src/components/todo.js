import React from 'react';
import { connect } from 'react-redux';

import TaskInput from './task-input';
import TaskList from './task-list';
import * as actions from '../state/actions';

const Todo = function(props) {
  return (
    <div id="todo-page">
      <header>
        <h1>TODO App</h1>
      </header>

      <section className="input">
        <TaskInput />
      </section>
      <section className="list">
        <TaskList tasks={props.tasks} />
      </section>
    </div>
  );
};

const stateToProps = function(state) {
  return {
    tasks: state.tasks
  };
};

export default connect(stateToProps)(Todo);

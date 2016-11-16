import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';

import TaskInput from './task-input';
import TaskList from './task-list';

const Todo = function(props) {
  return (
    <div id="todo-page">
      <header>
        <h1>TODO App</h1>
      </header>

      <section className="input">
        <TaskInput add={props.addTask} />
      </section>
      <section className="list">
        <TaskList tasks={props.tasks} toggle={props.toggleTask} />
      </section>
    </div>
  );
};

const actionsToProps = function(dispatch) {
  return {
    addTask: function(description) {
      dispatch(actions.addTask(description))
    },
    toggleTask: function(id) {
      dispatch(actions.toggleTask(id))
    }
  };
};

const stateToProps = function(state) {
  return {
    tasks: state.tasks
  };
};

export default connect(stateToProps, actionsToProps)(Todo);

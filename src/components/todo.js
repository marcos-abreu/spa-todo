import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions/task-actions';

import TaskInput from './task-input';
import TaskList from './task-list';

const Todo = function(props) {
  return (
    <div id="todo-page">
      <header id="app-header" className="row column">
        <h1>TODO App</h1>
      </header>

      <section className="row column input">
        <TaskInput add={props.addTask} />
      </section>
      <section className="row column list">
        <TaskList tasks={props.tasks} toggle={props.toggleTask} delete={props.deleteTask} />
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
    },
    deleteTask: function(id) {
      dispatch(actions.deleteTask(id))
    }
  };
};

const stateToProps = function(state) {
  return {
    tasks: state.tasks
  };
};

export default connect(stateToProps, actionsToProps)(Todo);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actions from '../state/actions/task-actions';
import TaskInput from './task-input';
import TaskList from './task-list';

class Todo extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  handleMenuClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();

    browserHistory.push(path);
  }

  render() {
    return (
      <div id="todo-page">
        <header id="app-header" className="row column">
          <h1>TODO App</h1>
          <nav>
            <ul className="menu">
              <li><a href="" onClick={e => this.handleMenuClick(e, '/')}>Home</a></li>
              <li><a href="" onClick={e => this.handleMenuClick(e, '/user-profile')}>User Profile</a></li>
            </ul>
          </nav>
        </header>

        <section className="row column input">
          <TaskInput add={this.props.addTask} />
        </section>
        <section className="row column list">
          <TaskList tasks={this.props.tasks} toggle={this.props.toggleTask} delete={this.props.deleteTask} />
        </section>
      </div>
    );
  }
}

const actionsToProps = function(dispatch) {
  return {
    addTask: function(description) {
      dispatch(actions.addTask(description));
    },
    toggleTask: function(id) {
      dispatch(actions.toggleTask(id));
    },
    deleteTask: function(id) {
      dispatch(actions.deleteTask(id));
    },
    fetchTasks: function() {
      dispatch(actions.fetchTasks());
    }
  };
};

const stateToProps = function(state) {
  return {
    tasks: state.tasks
  };
};

export default connect(stateToProps, actionsToProps)(Todo);

import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router';
//import Nav from './Nav';

class ToDoItems extends Component {

  constructor() {
    super();
    this.state = { toDoTasks: [] };
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(index) {
  console.info("INDEX" , index);
  console.info("clicked Item is :",this.state.toDoTasks[index]);
  deleteToDOTask(this.state.toDoTasks[index].taskId);

  console.info("DELETED TASK");

}

  render() {

    const { toDoTasks } = this.state;
    console.info("nishant@gmail has following tasks", {toDoTasks});

    return (
      <div>
      
        <button onClick="">
                <span className="fa fa-plus"> ADD NEW TASK </span>
        </button>

        { toDoTasks.map((toDoTask, index) => (
              <div className="col-sm-4" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">{ toDoTask.description }</span></h3>
                  </div>
                  <button onClick={this.handleClick.bind(this,index)}>
                      <span className="fa fa-remove"> Delete </span>
                  </button>
                  <button onClick="">
                    <span className="fa fa-check"> Completed </span>
                  </button>
                </div>
              </div>
          ))}
      </div>
    );
  }
}

export default ToDoItems;
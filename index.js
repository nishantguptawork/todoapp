import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landingPage';
// import ToDoItems from './components/ToDoItems';
import Task from './components/Task';
import { Router, Route, browserHistory } from 'react-router';
const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage}/>
        <Route path="/task" component={Task}/>
        {/*<Route path="/to-do-tasks" component={ToDoItems}/>*/}
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
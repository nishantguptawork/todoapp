import './js/utils.js';
import '../node_modules/todomvc-common/base.js';
import '../node_modules/react/dist/react-with-addons.js';
import '../node_modules/classnames/index.js';
// import '../node_modules/babel-core/lib/api/browser.js';
import '../node_modules/director/build/director.js';
// import TodoModel from './js/todoModel'
// import App from './js/app.jsx';
// import './js/todoitem.jsx';
// import App from './js/app';
// import Nav from './js/todoitem';
import React, { Component } from 'react';
class Task extends Component {


  // componentWillMount(){
  //   super();
  //   var model = new TodoModel('react-todos');
  //   model.subscribe(renderNew);
  // }


  // renderNew() {
	// 	React.render(
	// 		<App model={model}/>,
	// 		document.getElementsByClassName('app')[0]
	// 	);
	// }


  render() {
    return (
      <div>
        <App></App>
      </div>
    );
  }
}

export default Task;
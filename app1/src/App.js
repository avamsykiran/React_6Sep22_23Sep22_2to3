import { Component,Fragment } from 'react';
import './App.css';
import TaskManager from './components/TaskManager';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appTitle: "My First React App"
    };
  }

  render(){
    return (
      <Fragment>
        <header className='app'>
          <h3>{this.state.appTitle}</h3>
        </header>
        <TaskManager />
      </Fragment>
    );
  }
}

export default App;

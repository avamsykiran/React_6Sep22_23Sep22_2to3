import { Fragment } from 'react';
import TaskManager from './components/TaskManager';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header appTitle="ToDos Management" />
      <TaskManager />
    </Fragment>
  );
}

export default App;

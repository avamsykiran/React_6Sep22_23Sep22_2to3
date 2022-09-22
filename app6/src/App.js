import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskManager from './components/TaskManager';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header appTitle="ToDos Management" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

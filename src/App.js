import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './homepage';
import { Login } from './components/login-page/login'

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;

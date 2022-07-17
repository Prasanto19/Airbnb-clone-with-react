/* eslint-disable react/react-in-jsx-scope */
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;

/* eslint-disable react/react-in-jsx-scope */
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

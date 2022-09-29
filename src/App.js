import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Head from './head';
import Home from './home';

function App() {
  return (

    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>

  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Head from './head';
import Home from './home';

function App() {
  return (

    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/host/homes' element={<h1>Host homes page</h1>}/>
          <Route path='/host/experiences' element={<h1>Experiences page</h1>}/>
          <Route path='/help' element={<h1>Help page</h1>}/>
        </Routes>
    </Router>

  );
}

export default App;

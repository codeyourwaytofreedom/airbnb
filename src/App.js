import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Head from './head/head';
import Home from './home';

function App() {
  return (

    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/host/homes' element={<h1>Host homes page</h1>}/>
          <Route path='/host/experiences' element={<h1>Experiences page</h1>}/>
          <Route path='/help' element={<h1>Help page</h1>}/>
          <Route path='/privacy' element={<h1>Privacy</h1>}/>
          <Route path='/terms' element={<h1>Terms</h1>}/>
          <Route path='/sitemap' element={<h1>Sitemap</h1>}/>
          <Route path='/company-details' element={<h1>Company Details</h1>}/>

        </Routes>
    </Router>

  );
}

export default App;

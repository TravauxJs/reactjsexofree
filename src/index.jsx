import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Structure from './Components/Structure';
import Wrapper from './Page/Wrapper';
import Accueil from './Page/Accueil';
import List from './Page/List';
import Calcul from './Page/Calcul';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Wrapper/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/accueil' element={<Accueil/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/calcul' element={<Calcul/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import './App.css';
import React from'react';
import  { BrowserRouter , Routes , Route } from 'react-router-dom';

import Team from './routes/team/Team';
import Home from './routes/home/Home';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' component = { Home }/>
        <Route path='/team' component = { Team }/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import React from'react';
import  { BrowserRouter , Routes , Route } from 'react-router-dom';

import Team from './routes/team/Team';
import Home from './routes/home/Home';
import Header from'./components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' component = { <Home/> }/>
        <Route path='/team' component = { <Team/> }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;

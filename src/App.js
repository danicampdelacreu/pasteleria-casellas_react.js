import './App.css';
import React from'react';
import  { BrowserRouter , Routes , Route } from 'react-router-dom';

import Team from './routes/team/Team';
import Home from './routes/home/Home';
import Header from'./components/header/Header';
import Footer from './components/footer/Footer';
import Drinks from './routes/bebidas/Bebidas';
import Briox from './routes/brioxeria/Brioxeria';
import Days from './routes/dias/Dias';
import Pastel from './routes/pasteleria/Pasteleria';
import Repost from './routes/reposteria/Reposteria';


function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/team' element = { <Team/> }/>
        <Route path='/drinks' element = { <Drinks/> } />
        <Route path='/briox' element = { <Briox/> } />
        <Route path='/days' element = { <Days/> } />
        <Route path='/pastel' element = { <Pastel/> } />
        <Route path='/repost' element = { <Repost/> } />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;

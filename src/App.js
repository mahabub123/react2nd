import './App.css';
import Header from './Components/Header/Header';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Reviews from './Components/Reviews/Reviews';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      
      </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import AddUsers from './users/AddUsers';
import About from './pages/About';
import EditUsers from './users/EditUser';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path='/adduser' element={<AddUsers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/edituser/:id' element={<EditUsers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
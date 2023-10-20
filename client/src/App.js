
import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from './components/home/HomePage';
import AddEmp from './components/forms/AddEmp';
import EditEmp from './components/forms/EditEmp';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/create' element={<AddEmp />}></Route>
        <Route path='/edit/:id' element={<EditEmp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

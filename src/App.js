import './App.css';
import React, { } from 'react';
import {CreateForm} from './components/CreateForm';
import {Post} from './components/Post';
import {Home} from './components/Home';
import {Form} from './components/Form';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(){
  return(
        <Routes>
          <Route path="/" exact element= {<Home/>} />
          <Route path="/create-form" exact element= {<Post/>} />
          <Route path="/form/" element={<CreateForm/>} />
          <Route path="/form/:id" element={<Form/>} />
      </Routes>
  )
}
export default App;
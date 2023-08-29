import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Issues from './components/Issues/Issues';
import Pagination from './components/Pagination/Pagination';
import IssuesWriteBox from "./components/IssuesWriteBox/IssuesWriteBox";
import "./App.scss";
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Paginat from './components/Pagination/Paginat';
import Comment from './components/IssuesWriteBox/Comment';

const App = () => {
  
  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/issuesWriteBox" element={ <IssuesWriteBox /> } />
      <Route path='/' element={<Paginat />}/>
      <Route path='comments/:number' element={<Comments />}/>
      <Route path='comment/:index' element={<Comment />}/>
      
    </Routes>
   
    </Router>
  );
};

export default App;

import { useState } from 'react';
import './App.css';
import InputShortener from './component/InputShortener';
import LinkResult from './component/LinkResult';
import ShortenerForm from './component/ShortnerForm';
import Header from './Header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Routes, Route } from "react-router-dom";
import Job from './Jobs';
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Router>
    <div className="container">
      {/* <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <ShortenerForm/> */}
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/jobs" element={<Job />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
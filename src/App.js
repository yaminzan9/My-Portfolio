import React from 'react';
import Navbar from './component/Navbar/index';
import Index from './component/Index/index';
import Contact from './component/Contact/index';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Index/>
     </BrowserRouter>
  );
}

export default App;

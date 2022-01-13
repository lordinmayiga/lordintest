// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Customers from './Customers'
// import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';


// class App extends Component {
//   render() {
//     console.log("Host URL"+process.env.PUBLIC_URL);
//     return (

//       <Router basename={process.env.PUBLIC_URL}>
//         <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Simple React App</h1>
//         </header>
//           <Routes>
                
//                  <Route path='/customerlist' element={<Customers/>} />
//           </Routes>
//       </div>
//     </Router>
//     );
//   }
// }

// export default App;


import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useRoutes, BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import Home from "./pages/Home"
import Praise from "./pages/Prasie"
import NotFound from "./pages/NotFound"
const App = function(){
  console.log("Host URL"+process.env.PUBLIC_URL);
    return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                
                
                    <Route path="/quotes" element={<Praise/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    
}

export default App


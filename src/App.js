import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Select from "./select";
import UserTemplate from "./components/userTemplate"
{/*import Header from "./components/Header";
import Footer from "./components/Footer";*/}
// import Bye from "./pages/Bye";
// import Button from "./components/atom/Button";

function App() {
  return (
    <Router>
      {/*<Header />*/}
      <div>
        <Route exact path='/' component={ Select } />
        <Route exact path='/user' component={ UserTemplate } />
      </div>
      {/*<Footer />*/}
    </Router>
  )
}

export default App;


{/*import React from 'react';
import './App.css';
import Select from "./select";
import UserTemplate from "./components/userTemplate";
import AlertTemplate from "./components/alertTemplate"

function App() {
  return (
    <>
    <Select></Select>
    <UserTemplate></UserTemplate>
    <AlertTemplate></AlertTemplate>
    </>
  )
}

export default App;*/}




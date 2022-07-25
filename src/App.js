import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from './app/store'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Launch from "./pages/Launch";
import Rocket from "./pages/Rocket";
import Crews from "./pages/Crews";
import Company from "./pages/Company"
import Dragon from "./pages/Dragon"
import Pod from "./pages/Pod"
import Launches from "./pages/Launches";



function App() {
  return (
      <Router>
        <Provider store={store}>
          <div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/launch/:id' element={<Launch />} />
            <Route exact path='/launches' element={<Launches />} />
            <Route exact path='/company' element={<Company />} />
            <Route exact path='/crews' element={<Crews />} />
            <Route exact path='/pod' element={<Pod/>} />
            <Route exact path='/rocket/:id' element={<Rocket />} />
            <Route exact path='/dragon/:id' element={<Dragon />} />
          </Routes>
          </div>
        </Provider>
      </Router>
  );
}

export default App;

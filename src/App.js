import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import KnowledgeBase from './pages/KnowledgeBase';
import Calculators from './pages/Calculators';
import NotFound from './pages/NotFound';
import Dashboard from './admin/Dashboard';

import NavBar from './components/NavBar'
import Footer from './components/Footer';
import MoneyManagement from './pages/MoneyManagement';
import LandingPage from './pages/LandingPage';



function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/LandingPage">
              <LandingPage />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Services">
              <Services />
            </Route>
            <Route exact path="/KnowledgeBase">
              <KnowledgeBase />
            </Route>
            <Route exact path="/Calculators">
              <Calculators />
            </Route>
            <Route exact path="/MoneyManagement">
              <MoneyManagement />
            </Route>
            <Route exact path="/admin/Dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>  
          <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import AboutMe from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import NotFound from './pages/notfound';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main className="content">
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

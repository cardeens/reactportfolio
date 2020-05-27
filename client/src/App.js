import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/" component={About} /> */}
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

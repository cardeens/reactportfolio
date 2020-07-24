import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PDFViewer from "./components/PDFViewer";
import PDFJSBackend from './backends/pdfjs';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/" component={About} /> */}
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path={["/"]} component={About} />
          <Route path="/resume" render={ () => <PDFViewer backend={PDFJSBackend} src='/JJCardenasResume.pdf'/> } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

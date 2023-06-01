import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StyledLink from "./style";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          <StyledLink to="/"> Home</StyledLink>
        </div>
        <div>
          {" "}
          <StyledLink to="/about"> About</StyledLink>
        </div>
        <div>
          {" "}
          <StyledLink to="/contact"> Contact</StyledLink>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

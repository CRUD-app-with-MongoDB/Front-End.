import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route
              path="/About"
              element={<About />}
            
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Componetes/Navbar/Navbar";
import Home from "./Componetes/Home/Home";
import Footer from "./Componetes/Footer/Footer";
import Services from "./Componetes/Services/Services";
import Products from "./Componetes/Products/Products";
import SingUp from "./Componetes/SingUp/SingUp";


function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
       
        <Route path="/services">
        <Services></Services>
        </Route>
        <Route path="/products">
        <Products></Products>
        </Route>
        <Route path="/singUp">
        <SingUp></SingUp>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

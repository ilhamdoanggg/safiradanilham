import React, { useEffect } from "react";
import ReactGA from 'react-ga'
import { Switch, Route} from "react-router-dom";
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import {useLocation} from 'react-router-dom'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import ResetPassword from './pages/ResetPassword';
import './css/style.scss'
function App() {
  console.log(process.env.REACT_APP_GA);
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA)
    ReactGA.pageview(window.location.pathname + window.location.search);

    AOS.init({
      once: false,
      offset: 200,
      delay:100,
      debounceDelay: 50, 
      duration: 700,
      mirror: true,
      easing: 'ease-in-out-cubic'
    });
  });
  const location = useLocation();
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); 
  
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile/safira">
          <SignIn />
        </Route>
        <Route path="/profile/ilham">
          <SignUp />
        </Route>
        {/* <Route path="/reset-password">
          <ResetPassword />
        </Route> */}
      </Switch>
  );
}

export default App;

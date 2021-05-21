import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom";

import "./css/style.scss";

// import AOS from "aos";
// import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import ResetPassword from './pages/ResetPassword';

function App() {
  const [loading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 6000));
  }
  
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!loading);
      }
    });
  },[loading]);

  if (loading) {
    return null
  }
  // const location = useLocation();
  // useEffect(() => {
  //   document.querySelector("html").style.scrollBehavior = "auto";
  //   window.scroll({ top: 0 });
  //   document.querySelector("html").style.scrollBehavior = "";
  //   focusHandling("outline");
  // }, [location.pathname]); // triggered on route change

  return (
    <>
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
    </>
  );
}

export default App;

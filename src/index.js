import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/">Home</Link> | <Link to="/result">Search</Link>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<SearchPage></SearchPage>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

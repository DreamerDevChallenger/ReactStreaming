import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/resume/" element={<Resume></Resume>}></Route>
        <Route path="/result/" element={<SearchPage></SearchPage>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

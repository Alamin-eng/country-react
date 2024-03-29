import React, { useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import Footer from "./components/footer";
import FlyToCountry from "./components/FlyToCountry";
import "./App.css";

// let countries = require("./countriesAll.json");

function App() {
  const [darkMode, setDarkMode] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [headerBg, setHeaderBg] = useState("white");
  const [darkText, setDarkText] = useState("Dark Theme");
  const [sunOrMoon, setSunOrMoon] = useState("moon")
  // handle dark mode
  function handler() {
    return darkMode === "white" && fontColor === "black" && headerBg === "white" && sunOrMoon === "moon"
      ? setFontColor("white") +
          setDarkMode("#38393A") +
          setHeaderBg("#38393A") +
          setDarkText("Light Theme") +
          setSunOrMoon("sun")
      : setDarkMode("white") +
          setFontColor("black") +
          setHeaderBg("white") +
          setDarkText("Dark Theme") +
          setSunOrMoon("moon");
  } 

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          background: `${darkMode}`,
          color: `${fontColor}`,
          height: "100%",
        }}
      >
        <Header
          className="App-header"
          headerBackground={headerBg}
          darkText={darkText}
          darkMode={handler}
          sunOrMoon={sunOrMoon}
        />
        <FlyToCountry />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-details" element={<CountryDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


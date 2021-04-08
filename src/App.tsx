import React, { useState, useRef } from "react";

import "./App.css";
import Home from "./components/Home";


export default function App() {
  const ref = useRef(null);

  return (
    <Home/>
  );
}


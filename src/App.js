import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Import your Redux store
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import "./RegisterPage.css";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        \{" "}
      </BrowserRouter>
    </Provider>
  );
};

export default App;

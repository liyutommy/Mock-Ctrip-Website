import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristUserId" element={<DetailPage />} />
          <Route path="*" element={<h1>404 not found 页面跑去火星了</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

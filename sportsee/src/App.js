import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserPage />} />
				  <Route path="/user/:id" element={<UserPage />} />
					<Route element={<ErrorPage />} />
				</Routes>
      </BrowserRouter>
    </div>
	);
}

export default App;
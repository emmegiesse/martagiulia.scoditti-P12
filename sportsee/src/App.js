import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import IconBar from './components/IconBar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <div className="app">
            <BrowserRouter basename={process.env.PUBLIC_URL} >
                <Header />
                <IconBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user/:userId" element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;

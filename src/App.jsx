import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Toss/Header';
import Footer from './components/Toss/Footer';
import MainPage from './pages/MainPage';
import CardDetails from './pages/CardDetails';
import './styles.css';

function App() {
    return (
        <div className="page-container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/details" element={<CardDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
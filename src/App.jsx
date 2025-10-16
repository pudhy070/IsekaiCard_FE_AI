import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Toss/Header';
import Footer from './components/Toss/Footer';
import MainPage from './pages/MainPage';
import CardDetails from './pages/CardDetails';
import DailyCardPage from "./pages/DailyCardPage.jsx";
import WeekendCardPage from "./pages/WeekendCardPage.jsx";
import PlatinumCardPage from "./pages/PlatinumCardPage.jsx";
import EventPage from './pages/EventPage';
import EventWritePage from './pages/EventWritePage';
import EventDetailPage from './pages/EventDetailPage';
import EventEditPage from './pages/EventEditPage';
import CardApplicationPage from './pages/CardApplicationPage';
import AdminPage from './pages/AdminPage';
import ApplicationStatusPage from './pages/ApplicationStatusPage';
import './styles.css';
import AI from "./pages/AI.jsx";
import Search from "./pages/Search.jsx";
import Chat from "./pages/Chat.jsx";
import Llm from "./pages/Llm.jsx";
import AiGuidePage from "./pages/AiGuidePage.jsx";

function App() {
    return (
        <div className="page-container">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/details" element={<CardDetails />} />

                        <Route path="/daily" element={<DailyCardPage />} />
                        <Route path="/weekend" element={<WeekendCardPage />} />
                        <Route path="/platinum" element={<PlatinumCardPage />} />

                        <Route path="ai" element={<AI/>}/>
                        <Route path="/aiguide" element={<AiGuidePage />} />
                        <Route path="chat" element={<Chat/>} />
                        <Route path="search" element={<Search />} />
                        <Route path="llm" element={<Llm />} />


                        <Route path="/events" element={<EventPage />} />
                        <Route path="/events/write" element={<EventWritePage />} />
                        <Route path="/events/:id" element={<EventDetailPage />} />
                        <Route path="/events/edit/:id" element={<EventEditPage />} />



                        <Route path="/apply" element={<CardApplicationPage />} />
                        <Route path="/status" element={<ApplicationStatusPage />} />

                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;


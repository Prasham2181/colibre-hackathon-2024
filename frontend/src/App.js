import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import QuestionnaireForm from './components/QuestionnaireForm';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/form" element={<QuestionnaireForm />} />
            </Routes>
        </Router>
    );
};

export default App;

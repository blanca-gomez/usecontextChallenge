import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';

function RoutesApp (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myjob" element={<MyJob />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;
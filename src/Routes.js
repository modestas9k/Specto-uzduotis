import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopNavigation } from './components';
import { Functions } from './pages';

function App() {
    return (
        <Router>
            <TopNavigation />
            <Routes>
                <Route path="/" element={<Functions />} />
            </Routes>
        </Router>
    );
}

export default App;

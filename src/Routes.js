import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopNavigation } from './components';
import { FunctionsPage } from './pages';

function App() {
    return (
        <Router>
            <TopNavigation />
            <Routes>
                <Route path="/" element={<FunctionsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
